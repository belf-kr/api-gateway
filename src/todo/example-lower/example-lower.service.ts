import { Injectable } from "@nestjs/common";

import { TodoApiClient } from "../lib/api";

import { ExampleLower, PutExampleLower } from "./example-lower.type";

@Injectable()
export class ExampleLowerService {
  private readonly todoApiClient: TodoApiClient;

  constructor(todoApiClient: TodoApiClient) {
    this.todoApiClient = todoApiClient;
  }

  async postExampleLower(body: ExampleLower[]) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.postExampleLower(body);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getExampleLower(body: ExampleLower[]) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.getExampleLower(body);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async putExampleLower(body: PutExampleLower) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.putExampleLower(body);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async deleteExampleLower(body: ExampleLower[]) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.deleteExampleLower(body);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }
}
