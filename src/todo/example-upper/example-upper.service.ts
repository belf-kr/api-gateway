import { Injectable } from "@nestjs/common";

import { TodoApiClient } from "../lib/api";

@Injectable()
export class ExampleUpperService {
  private readonly todoApiClient: TodoApiClient;

  constructor(todoApiClient: TodoApiClient) {
    this.todoApiClient = todoApiClient;
  }

  async getExampleUpper() {
    try {
      const result = await this.todoApiClient.getExampleUpper();
      return result;
    } catch (error) {
      throw error;
    }
  }
}
