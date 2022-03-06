type Expected = {
  mockId: string;
  statusCode: number;
  fixtureType: string;
  delay: number;
};

declare namespace Express {
  export interface Request {
    expected: Expected;
  }
}
