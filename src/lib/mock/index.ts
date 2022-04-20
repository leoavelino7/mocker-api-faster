import { MockItem, MockResponse } from "./types";

class Mock {
  mocks: Record<string, MockItem>;

  constructor() {
    this.mocks = {};
  }

  add(mockItem: MockItem) {
    const mockId = `${mockItem.method}_${mockItem.path}`.toLowerCase();
    try {
      if (this.mocks[mockId]) {
        throw new Error(`This address is already registered: ${mockId}`);
      }
      this.mocks[mockId] = mockItem;
    } catch (error) {
      console.error(error);
    } finally {
      return mockId;
    }
  }

  addMany(configs: MockItem[]) {
    return configs.map((config) => this.add(config));
  }

  get(mockId: string, statusCodeExpected: number, type: string): MockResponse {
    const mockFound = this.mocks[mockId];

    if (!mockFound) return null;

    const expected = mockFound.expected.response[statusCodeExpected];

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
