import { Request, Response } from "express";
import { mock } from "./mock";
import { MockResponse } from "./mock/types";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const handleResponse = async (request: Request, response: Response) => {
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

    const headerApplyDelay = Number(
      request.headers["expected-delay"]
    );

    let delay = mockResponse.fixture?.delay ?? 0;

    if(!Number.isNaN(headerApplyDelay)) delay = headerApplyDelay;

    if(delay) await sleep(delay);

    return response
      .header(mockResponse.headers)
      .status(mockResponse.statusCode)
      .json(mockResponse.fixture.file)
      .end();
  }

  return response.status(404).json({
    message: "Endpoint not found =(. Read the documentation",
  });
};

export default handleResponse;
