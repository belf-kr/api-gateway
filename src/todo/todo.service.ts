import { Injectable } from "@nestjs/common";

import { TodoApiClient } from "./lib/api";

@Injectable()
export class TodoService {
  private todoApiClient: TodoApiClient;

  constructor(todoApiClient: TodoApiClient) {
    this.todoApiClient = todoApiClient;
  }

  async getServiceName() {
    try {
      const result = await this.todoApiClient.getServiceName();
      return result;
    } catch (error) {
      return error;
    }
  }
  async getPing() {
    try {
      const result = await this.todoApiClient.getPing();
      return result;
    } catch (error) {
      return error;
    }
  }
  async getVersion() {
    try {
      const result = await this.todoApiClient.getVersion();
      return result;
    } catch (error) {
      return error;
    }
  }
  async getEnv() {
    try {
      const result = await this.todoApiClient.getEnv();
      return result;
    } catch (error) {
      return error;
    }
  }
}
