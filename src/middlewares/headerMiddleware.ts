import { Request, Response, NextFunction } from "express";

export const headerMiddleware = (
  request: Request,
  _: Response,
  next: NextFunction
) => {
  const { headers } = request;

  const expectedFixtureType = headers["expected-fixture-type"];

  request.expected = {
    mockId: `${request.method}_${request.url}`.toLowerCase(),
    statusCode: Number(headers["expected-status-code"]) || 200,
    fixtureType: typeof expectedFixtureType === "string" ? expectedFixtureType : "base",
    delay: Number(headers["expected-delay"]) || 0,
  };

  next();
};
