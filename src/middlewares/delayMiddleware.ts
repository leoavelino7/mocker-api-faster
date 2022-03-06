import { Request, Response, NextFunction } from "express";

export const delayMiddleware = (
  request: Request,
  _: Response,
  next: NextFunction
) => {
  if (request.expected.delay) {
    setTimeout(next, request.expected.delay);
  } else {
    next();
  }
};
