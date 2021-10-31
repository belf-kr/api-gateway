import { Injectable } from "@nestjs/common";

import { ExampleUpper, PutExampleUpper } from "./example-upper.type";

import { TodoApiClient } from "../lib/api";

@Injectable()
export class ExampleUpperService {
  private readonly todoApiClient: TodoApiClient;

  constructor(todoApiClient: TodoApiClient) {
    this.todoApiClient = todoApiClient;
  }

  async postExampleUpper(body: ExampleUpper[]) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.postExampleUpper(body);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getExampleUpper(body: ExampleUpper[]) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.getExampleUpper(body);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async putExampleUpper(body: PutExampleUpper) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.putExampleUpper(body);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async deleteExampleUpper(body: ExampleUpper[]) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.deleteExampleUpper(body);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }
}
