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
      // TODO: 추후, 주석을 풀어야 합니다.
      // return res.data;
      return res;
    } catch (error) {
      return error;
    }
  }
  async getPing() {
    try {
      const res = await this.todoApiClient.getPing();
      return res.data;
    } catch (error) {
      return error;
    }
  }
  async getVersion() {
    try {
      const res = await this.todoApiClient.getVersion();
      return res.data;
    } catch (error) {
      return error;
    }
  }
  async getEnv() {
    try {
      const res = await this.todoApiClient.getEnv();
      return res.data;
    } catch (error) {
      return error;
    }
  }
}
