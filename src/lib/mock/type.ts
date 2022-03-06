type MockHeader = Record<string, string>;

type StatusCode = number;

type Method = "get" | "post" | "put" | "delete";

type MockFixture = {
  fixture: Record<string, any>;
  headers?: MockHeader;
};

type MockExpected = {
  fixtures: Record<StatusCode, MockFixture>;
  globalHeaders?: MockHeader;
};

export type MockConfig = {
  url: string;
  method: Method;
  body?: any;
  expected: MockExpected;
};

export type MockResponse = null | {
  headers?: MockHeader;
  statusCode: number;
  fixture: any;
};
