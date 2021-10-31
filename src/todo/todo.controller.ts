import { Body, Controller, Delete, Get, HttpException, Param, Post, Query } from "@nestjs/common";
import * as axios from "axios";

import { TodoService } from "./todo.service";

import { getErrorHttpStatusCode, getErrorMessage } from "src/common/lib/error";
import { CourseType } from "src/common/type/course.type";
import { WorkTodoType } from "src/common/type/work-todo.type";
import { WorkDoneType } from "src/common/type/work-done.type";
import { ColorType } from "src/common/type/color.type";

@Controller("todo")
export class TodoController {
  private readonly appService: TodoService;

  constructor(appService: TodoService) {
    this.appService = appService;
  }

  @Get()
  async getServiceName(): Promise<string> {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.getServiceName();
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("ping")
  async getPing() {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.getPing();
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("version")
  async getVersion(): Promise<string> {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.getVersion();
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("env")
  async getEnv(): Promise<NodeJS.ProcessEnv> {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.getEnv();
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  // API

  @Get("colors")
  async getAllColors() {
    let serviceResult: Array<ColorType>;

    try {
      const result: axios.AxiosResponse<any> = await this.appService.getAllColors();

      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Post("courses")
  async createCourse(@Body() coursesInput: CourseType) {
    let serviceResult: any;

    try {
      const result: axios.AxiosResponse<any> = await this.appService.createCourse(coursesInput);
      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("courses")
  async getAllCourses() {
    let serviceResult: any;

    try {
      const result: axios.AxiosResponse<any> = await this.appService.getAllCourses();
      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Delete("courses/:id")
  async deleteCourse(@Param() params) {
    let serviceResult: any;

    try {
      const result: axios.AxiosResponse<any> = await this.appService.deleteCourse(params.id);
      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  // WorkTodo
  @Post("work-todos")
  async createWorkTodo(@Body() workTodoInput: WorkTodoType) {
    let serviceResult: any;

    try {
      const result: axios.AxiosResponse<any> = await this.appService.createWorkTodo(workTodoInput);
      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("work-todos")
  async getWorkTodosByConditions(@Query("courseId") courseId?: number) {
    let serviceResult: any;

    try {
      const result: axios.AxiosResponse<any> = await this.appService.getWorkTodosByConditions(courseId);
      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Delete("work-todos/:id")
  async deleteWorkTodo(@Param() params: any) {
    let serviceResult: any;

    try {
      const result: axios.AxiosResponse<any> = await this.appService.deleteWorkTodo(params.id);
      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  // WorkDone
  @Post("work-dones")
  async createWorkDone(@Body() workDoneInput: WorkDoneType) {
    let serviceResult: any;

    try {
      const result: axios.AxiosResponse<any> = await this.appService.createWorkDone(workDoneInput);
      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("work-dones/:id")
  async getWorkDone(@Param() params: any) {
    let serviceResult: any;

    try {
      const result: axios.AxiosResponse<any> = await this.appService.getWorkDone(params.id);
      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }
}
