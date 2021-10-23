import { Injectable } from "@nestjs/common";

import { TodoApiClient } from "./lib/api";

import { MockApiClient } from "../mock/lib/api";

import { CourseType } from "src/common/type/course.type";
import { WorkTodoType } from "src/common/type/work-todo.type";
import { WorkDoneType } from "src/common/type/work-done.type";

@Injectable()
export class TodoService {
  private readonly mockApiClient: MockApiClient;
  private readonly todoApiClient: TodoApiClient;

  constructor(mockApiClient: MockApiClient, todoApiClient: TodoApiClient) {
    this.mockApiClient = mockApiClient;
    this.todoApiClient = todoApiClient;
  }

  async getServiceName() {
    try {
      const result = await this.todoApiClient.getServiceName();
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getPing() {
    try {
      const result = await this.todoApiClient.getPing();
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getVersion() {
    try {
      const result = await this.todoApiClient.getVersion();
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getEnv() {
    try {
      const result = await this.todoApiClient.getEnv();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getTodayTodos() {
    try {
      const result = await this.mockApiClient.getTodayTodos();
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getGlass() {
    try {
      const result = await this.mockApiClient.getGlass();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getAllColors() {
    try {
      const result = await this.todoApiClient.getAllColors();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async createCourse(courseInput: CourseType) {
    try {
      const result = await this.todoApiClient.createCourse(courseInput);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getAllCourses() {
    try {
      const result = await this.todoApiClient.getAllCourses();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async deleteCourse(id: number) {
    try {
      const result = await this.todoApiClient.deleteCourse(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  // WorkTodo
  async createWorkTodo(workTodoInput: WorkTodoType) {
    try {
      const result = await this.todoApiClient.createWorkTodo(workTodoInput);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getAllWorkTodos() {
    try {
      const result = await this.todoApiClient.getAllWorkTodos();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async deleteWorkTodo(id: number) {
    try {
      const result = await this.todoApiClient.deleteWorkTodo(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  // WorkDone
  async createWorkDone(workDoneInput: WorkDoneType) {
    try {
      const result = await this.todoApiClient.createWorkDone(workDoneInput);
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getWorkDone(id: number) {
    try {
      const result = await this.todoApiClient.getWorkDone(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
