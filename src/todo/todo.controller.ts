import { Body, Controller, Delete, Get, Headers, HttpException, Param, Post, Query } from "@nestjs/common";
import { AxiosResponse } from "axios";

import { TodoService } from "./todo.service";

import { getErrorHttpStatusCode, getErrorMessage } from "src/common/lib/error";

import { WorkDoneType } from "src/common/type/work-done.type";
import { ColorType } from "src/common/type/color.type";
import { CoursePostInterface } from "src/common/type/course-post.interface";
import { CourseGetInterface } from "src/common/type/course-get.interface";
import { WorkTodoPostInterface } from "src/common/type/work-todo-post.interface";
import { WorkTodoGetInterface } from "src/common/type/work-todo-get.interface";

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
      const result: AxiosResponse<any> = await this.appService.getAllColors();

      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Post("courses")
  async createCourse(@Headers() headers: Record<string, string>, @Body() coursePostInput: CoursePostInterface) {
    let serviceResult: any;

    try {
      const result: AxiosResponse<any> = await this.appService.createCourse(coursePostInput, headers);
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
    let serviceResult: CourseGetInterface[];

    try {
      const result: AxiosResponse<any> = await this.appService.getAllCourses();
      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Delete("courses/:id")
  async deleteCourse(@Param("id") id: number) {
    let serviceResult: any;

    try {
      const result: AxiosResponse<any> = await this.appService.deleteCourse(id);
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
  async createWorkTodo(@Body() workTodoPostInput: WorkTodoPostInterface) {
    let serviceResult: any;

    try {
      const result: AxiosResponse<any> = await this.appService.createWorkTodo(workTodoPostInput);
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
    let serviceResult: WorkTodoGetInterface[];

    try {
      const result: AxiosResponse<any> = await this.appService.getWorkTodosByConditions(courseId);
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
      const result: AxiosResponse<any> = await this.appService.deleteWorkTodo(params.id);
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
      const result: AxiosResponse<any> = await this.appService.createWorkDone(workDoneInput);
      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("work-dones")
  async getWorkDonesByConditions(@Query("courseId") courseId?: number) {
    let serviceResult: any;

    try {
      const result: AxiosResponse<any> = await this.appService.getWorkDonesByConditions(courseId);
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
      const result: AxiosResponse<any> = await this.appService.getWorkDone(params.id);
      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }
}
