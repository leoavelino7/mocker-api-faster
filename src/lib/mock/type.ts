type StatusCode = number;

type Method = "get" | "post" | "put" | "delete";

type MockHeader = Record<string, string>;

type MockBody = Record<string, any>;

type MockFixture = {
  fixture: Record<string, any>;
  headers?: MockHeader;
  body?: MockBody;
};

type MockExpected = {
  fixtures: Record<StatusCode, MockFixture>;
  globalHeaders?: MockHeader;
  globalBody?: MockBody;
};

export type MockConfig = {
  url: string;
  method: Method;
  body?: any;
  expected: MockExpected;
};

export type MockResponse = null | {
  headers?: MockHeader;
  statusCode: StatusCode;
  fixture: any;
};
