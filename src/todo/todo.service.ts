import { HttpService, Injectable } from "@nestjs/common";

import * as todo from "../lib/todo";

@Injectable()
export class TodoService {
  private todoApiClient: todo.ApiClient;

  constructor(private httpService: HttpService) {
    this.todoApiClient = new todo.ApiClient(httpService);
  }
}
