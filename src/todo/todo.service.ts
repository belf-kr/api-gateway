import { Injectable } from "@nestjs/common";

import { TodoApiClient } from "./lib/api";

import { MockApiClient } from "../mock/lib/api";

import { BelfJwtService } from "src/belf-jwt/belf-jwt.service";

import { CourseType } from "src/common/type/course.type";
import { WorkTodoType } from "src/common/type/work-todo.type";
import { WorkDoneType } from "src/common/type/work-done.type";

@Injectable()
export class TodoService {
  private readonly mockApiClient: MockApiClient;
  private readonly todoApiClient: TodoApiClient;
  private readonly belfJwtService: BelfJwtService;

  constructor(mockApiClient: MockApiClient, todoApiClient: TodoApiClient, belfJwtService: BelfJwtService) {
    this.mockApiClient = mockApiClient;
    this.todoApiClient = todoApiClient;
    this.belfJwtService = belfJwtService;
  }

  async getServiceName() {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.getServiceName();
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getPing() {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.getPing();
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getVersion() {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.getVersion();
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getEnv() {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.getEnv();
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getTodayTodos() {
    let apiClientResult: any;

    try {
      apiClientResult = await this.mockApiClient.getTodayTodos();
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getGlass() {
    let apiClientResult: any;

    try {
      apiClientResult = await this.mockApiClient.getGlass();
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getAllColors() {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.getAllColors();
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async createCourse(courseInput: CourseType, headers: Record<string, string>) {
    let apiClientResult: any;
    courseInput.creatorId = this.belfJwtService.getUserId(headers["authorization"]);

    try {
      apiClientResult = await this.todoApiClient.createCourse(courseInput);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getAllCourses() {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.getAllCourses();
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async deleteCourse(id: number) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.deleteCourse(id);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  // WorkTodo
  async createWorkTodo(workTodoInput: WorkTodoType) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.createWorkTodo(workTodoInput);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getWorkTodosByConditions(courseId?: number) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.getWorkTodosByConditions(courseId);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async deleteWorkTodo(id: number) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.deleteWorkTodo(id);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  // WorkDone
  async createWorkDone(workDoneInput: WorkDoneType, headers: Record<string, string>) {
    let apiClientResult: any;

    try {
      workDoneInput.userId = this.belfJwtService.getUserId(headers["authorization"]);
      apiClientResult = await this.todoApiClient.createWorkDone(workDoneInput);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getWorkDonesByConditions(courseId?: number) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.getWorkDoneByConditions(courseId);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getWorkDone(id: number) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.getWorkDone(id);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }
}
