import { Injectable } from "@nestjs/common";

import { TodoApiClient } from "../lib/api";

import { ExampleUpper } from "./example-upper.type";

@Injectable()
export class ExampleUpperService {
  private readonly todoApiClient: TodoApiClient;

  constructor(todoApiClient: TodoApiClient) {
    this.todoApiClient = todoApiClient;
  }

  async postExampleUpper(body: ExampleUpper[]) {
    try {
      const result = await this.todoApiClient.postExampleUpper(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getExampleUpper(body: ExampleUpper[]) {
    try {
      const result = await this.todoApiClient.getExampleUpper(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
