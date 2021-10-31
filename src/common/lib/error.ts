import { HttpStatus } from "@nestjs/common";
import { AxiosError } from "axios";

function isAxiosError(error: any): error is AxiosError {
  return error.response !== undefined;
}

export function getErrorMessage(error: any): string {
  let result: string;

  if (isAxiosError(error)) {
    if (error.response.data !== undefined) {
      result = error.response.data;
    }
    result = error.message;
  }
  result = error.message;

  return result;
}

export function getErrorHttpStatusCode(error: any): number {
  return isAxiosError(error) ? error.response.status : HttpStatus.INTERNAL_SERVER_ERROR;
}
