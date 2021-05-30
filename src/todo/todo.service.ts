import { Injectable } from "@nestjs/common";

import { TodoApiClient } from "./lib/api";

import { MockApiClient } from "../mock/lib/api";

@Injectable()
export class TodoService {
  private mockApiClient: MockApiClient;
  private todoApiClient: TodoApiClient;

  constructor(mockApiClient: MockApiClient, todoApiClient: TodoApiClient) {
    this.mockApiClient = mockApiClient;
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

  async getTodayTodos() {
    try {
      const result = await this.mockApiClient.getTodayTodos();
      return result;
    } catch (error) {
      return error;
    }
  }
  async getGlass() {
    try {
      const result = await this.mockApiClient.getGlass();
      return result;
    } catch (error) {
      return error;
    }
  }
}
