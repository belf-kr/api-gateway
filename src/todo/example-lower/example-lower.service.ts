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
    try {
      const result = await this.todoApiClient.postExampleLower(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getExampleLower(body: ExampleLower[]) {
    try {
      const result = await this.todoApiClient.getExampleLower(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  async putExampleLower(body: PutExampleLower) {
    try {
      const result = await this.todoApiClient.putExampleLower(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  async deleteExampleLower(body: ExampleLower[]) {
    try {
      const result = await this.todoApiClient.deleteExampleLower(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
