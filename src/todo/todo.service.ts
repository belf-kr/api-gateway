import { Injectable } from "@nestjs/common";

import { TodoApiClient } from "./lib/api";

import { MockApiClient } from "../mock/lib/api";

import { BelfJwtService } from "src/belf-jwt/belf-jwt.service";

import { ColorType } from "src/common/type/color.type";
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
    console.log(`Service begin: ${new Date().toUTCString()}, and ${new Date().getUTCMilliseconds()}ms`);
    let apiClientResult: any;

    try {
      console.log(`Before call API HTTP Call: ${new Date().toUTCString()}, and ${new Date().getUTCMilliseconds()}ms`);
      apiClientResult = await this.todoApiClient.getPing();
    } catch (error) {
      throw error;
    }

    console.log(`Service end: ${new Date().toUTCString()}, and ${new Date().getUTCMilliseconds()}ms`);
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

  async createColor(colorInput: ColorType) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.createColor(colorInput);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async createCourse(courseInput: CourseType, headers: Record<string, string>) {
    let apiClientResult: any;
    courseInput.userId = this.belfJwtService.getUserId(headers["authorization"]);

    try {
      apiClientResult = await this.todoApiClient.createCourse(courseInput);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getCoursesByConditions(userId?: number) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.getCoursesByConditions(userId);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getCourse(id: number) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.getCourse(id);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async deleteCourse(headers: Record<string, string>, id: number) {
    let apiClientResult: any;
    const userId = this.belfJwtService.getUserId(headers["authorization"]);

    try {
      apiClientResult = await this.todoApiClient.deleteCourse(userId, id);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  // WorkTodo
  async createWorkTodo(workTodoInput: WorkTodoType, headers: Record<string, string>) {
    let apiClientResult: any;
    workTodoInput.userId = this.belfJwtService.getUserId(headers["authorization"]);

    try {
      apiClientResult = await this.todoApiClient.createWorkTodo(workTodoInput);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getWorkTodosByConditions(userId?: number, courseId?: number, activeDate?: Date, maximumActiveDate?: Date) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.getWorkTodosByConditions(userId, courseId, activeDate, maximumActiveDate);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async deleteWorkTodo(headers: Record<string, string>, id: number) {
    let apiClientResult: any;
    const userId = this.belfJwtService.getUserId(headers["authorization"]);

    try {
      apiClientResult = await this.todoApiClient.deleteWorkTodo(userId, id);
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

  async getWorkDonesByConditions(userId?: number, courseId?: number) {
    let apiClientResult: any;

    try {
      apiClientResult = await this.todoApiClient.getWorkDoneByConditions(userId, courseId);
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

  async deleteWorkDone(headers: Record<string, string>, id: number) {
    let apiClientResult: any;
    const userId = this.belfJwtService.getUserId(headers["authorization"]);

    try {
      apiClientResult = await this.todoApiClient.deleteWorkDone(userId, id);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }
}
