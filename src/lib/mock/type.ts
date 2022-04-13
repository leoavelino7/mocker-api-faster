type StatusCode = number;

export type Method = "get" | "post" | "put" | "delete";

type MockHeader = Record<string, string>;

type MockBody = Record<string, any>;

type FixtureConfig = {
  file: string;
  delay?: number;
}
export type MockFixture = {
  fixture: Record<string, FixtureConfig>;
  headers?: MockHeader;
  body?: MockBody;
};

export type MockExpected = {
  response: Record<StatusCode, MockFixture>;
  globalHeaders?: MockHeader;
  globalBody?: MockBody;
};

export type MockItem = {
  path?: string;
  method: Method;
  expected: MockExpected;
}

export type MockConfig = {
  config: {
    prefix_path?: string;
    prefix_fixture?: string;
  },
  routes: Array<MockItem>
};

export type MockResponse = null | {
  headers?: MockHeader;
  statusCode: StatusCode;
  fixture: FixtureConfig;
};
