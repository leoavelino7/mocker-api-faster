import { Request, Response } from "express";
import { mock } from "./mock";
import { MockResponse } from "./mock/type";

const handleResponse = (request: Request, response: Response) => {
  let mockResponse: MockResponse = null;

  const mockId = `${request.method}_${request.route.path}`.toLowerCase();
  if (mockId) {
    mockResponse = mock.get(
      mockId,
      request.expected.statusCode,
      request.expected.fixtureType
    );
  }

  if (mockResponse) {
    return response
      .header(mockResponse.headers)
      .status(mockResponse.statusCode)
      .json(mockResponse.fixture)
      .end();
  }

  return response.status(404).json({
    message: "Endpoint not found =(. Read the documentation",
  });
};

export default handleResponse;
