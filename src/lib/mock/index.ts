import { MockConfig, MockResponse } from "./type";

class Mock {
  mocks: Record<string, MockConfig>;

  constructor() {
    this.mocks = {};
  }

  set(config: MockConfig) {
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

  setMany(configs: MockConfig[]) {
    configs.forEach((config) => this.set(config));
  }

  get(mockId: string, statusCodeExpected: number, type: string): MockResponse {
    const mockFound = this.mocks[mockId];

    if (!mockFound) return null;

    const expected = mockFound.expected.fixtures[statusCodeExpected];

    if (!expected) return null;

    const config = {
      fixture: expected.fixture[type],
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

export default new Mock();
