import { MockConfig, MockResponse } from "./type";

class Mock {
  mocks: Record<string, MockConfig>;

  constructor() {
    this.mocks = {};
  }

  add(config: MockConfig) {
    try {
      const mockId = `${config.method}_${config.url}`;
      if (this.mocks[mockId]) {
        throw new Error(`This address is already registered: ${mockId}`);
      }
      this.mocks[mockId] = config;
    } catch (error) {
      console.error(error);
    }
  }

  addMany(configs: MockConfig[]) {
    configs.forEach((config) => this.add(config));
  }

  get(mockId: string, statusCodeExpected: number, type: string): MockResponse {
    const mockFound = this.mocks[mockId];

    if (!mockFound) return null;

    const expected = mockFound.expected.fixtures[statusCodeExpected];

    if (!expected) return null;

    const config = {
      fixture: {
        ...expected.fixture[type],
        ...expected.body,
        ...mockFound.expected.globalBody,
      },
      statusCode: statusCodeExpected,
      headers: {
        ...mockFound.expected.globalHeaders,
        ...expected.headers,
      },
    };

    return config.fixture && config.statusCode ? config : null;
  }

  getAddress() {
    return Object.keys(this.mocks);
  }
}

export const mock = new Mock();
