import { Body, Controller, Delete, Get, HttpException, Param, Post } from "@nestjs/common";
import * as axios from "axios";

import { TodoService } from "./todo.service";

import { getErrorHttpStatusCode, getErrorMessage } from "src/common/lib/error";
import { CourseType } from "src/common/type/course.type";
import { WorkTodoType } from "src/common/type/work-todo.type";
import { WorkDoneType } from "src/common/type/work-done.type";

@Controller("todo")
export class TodoController {
  private readonly appService;

  constructor(appService: TodoService) {
    this.appService = appService;
  }

  @Get()
  async getServiceName(): Promise<string> {
    try {
      const result = await this.appService.getServiceName();
      return result;
    } catch (error) {
      return error;
    }
  }

  @Get("ping")
  async getPing() {
    try {
      const result = await this.appService.getPing();
      return result;
    } catch (error) {
      return error;
    }
  }

  @Get("version")
  async getVersion(): Promise<string> {
    try {
      const result = await this.appService.getVersion();
      return result;
    } catch (error) {
      return error;
    }
  }

  @Get("env")
  async getEnv(): Promise<NodeJS.ProcessEnv> {
    try {
      const result = await this.appService.getEnv();
      return result;
    } catch (error) {
      return error;
    }
  }

  @Get("today-todos")
  async getTodayTodos() {
    try {
      const result: axios.AxiosResponse = await this.appService.getTodayTodos();
      return result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
  }

  @Get("glass")
  async getGlass() {
    try {
      const result: axios.AxiosResponse = await this.appService.getGlass();
      return result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
  }

  // API

  @Get("colors")
  async getAllColors() {
    try {
      const result: axios.AxiosResponse = await this.appService.getAllColors();

      return result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
  }

  @Post("courses")
  async createCourse(@Body() coursesInput: CourseType) {
    try {
      const result: axios.AxiosResponse = await this.appService.createCourse(coursesInput);
      return result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
  }

  @Get("courses")
  async getAllCourses() {
    try {
      const result: axios.AxiosResponse = await this.appService.getAllCourses();
      return result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
  }

  @Delete("courses/:id")
  async deleteCourse(@Param() params) {
    try {
      const result: axios.AxiosResponse = await this.appService.deleteCourse(params.id);
      return result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
  }

  // WorkTodo
  @Post("work-todos")
  async createWorkTodo(@Body() workTodoInput: WorkTodoType) {
    try {
      const result: axios.AxiosResponse = await this.appService.createWorkTodo(workTodoInput);
      return result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
  }

  @Get("work-todos")
  async getAllWorkTodos() {
    try {
      const result: axios.AxiosResponse = await this.appService.getAllWorkTodos();
      return result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
  }

  @Delete("work-todos/:id")
  async deleteWorkTodo(@Param() params: any) {
    try {
      const result: axios.AxiosResponse = await this.appService.deleteWorkTodo(params.id);
      return result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
  }

  // WorkDone
  @Post("work-dones")
  async createWorkDone(@Body() workDoneInput: WorkDoneType) {
    try {
      const result: axios.AxiosResponse = await this.appService.createWorkDone(workDoneInput);
      return result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
  }

  @Get("work-dones/:id")
  async getWorkDone(@Param() params: any) {
    try {
      const result: axios.AxiosResponse = await this.appService.getWorkDone(params.id);
      return result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
  }
}
