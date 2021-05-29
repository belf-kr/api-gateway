import { HttpService, Injectable } from "@nestjs/common";

import * as todo from "../lib/todo";

@Injectable()
export class TodoService {
  private todoApiClient: todo.ApiClient;

  constructor(private httpService: HttpService) {
    this.todoApiClient = new todo.ApiClient(httpService);
  }

  async getServiceName() {
    try {
      const res = await this.todoApiClient.getServiceName();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async getPing() {
    try {
      const res = await this.todoApiClient.getPing();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async getVersion() {
    try {
      const res = await this.todoApiClient.getVersion();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async getEnv() {
    try {
      const res = await this.todoApiClient.getEnv();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}
