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

  @Post("colors")
  async createColor(@Body() colorInput: ColorType) {
    let serviceResult: any;

    try {
      const result: AxiosResponse<any> = await this.appService.createColor(colorInput);
      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("courses/search")
  async searchCourse(@Query("keyword") keyword: string) {
    let serviceResult: any;

    try {
      const result: AxiosResponse<any> = await this.appService.searchCourse(keyword);
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
  async getCoursesByConditions(@Query("userId") userId?: number) {
    let serviceResult: CourseGetInterface[];

    try {
      const result: AxiosResponse<any> = await this.appService.getCoursesByConditions(userId);

      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("courses/:id")
  async getCourse(@Param("id") id: number) {
    let serviceResult: any;

    try {
      const result: AxiosResponse<any> = await this.appService.getCourse(id);
      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Delete("courses/:id")
  async deleteCourse(@Headers() headers: Record<string, string>, @Param("id") id: number) {
    let serviceResult: any;

    try {
      const result: AxiosResponse<any> = await this.appService.deleteCourse(headers, id);
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
  async createWorkTodo(@Headers() headers: Record<string, string>, @Body() workTodoPostInput: WorkTodoPostInterface) {
    let serviceResult: any;

    try {
      const result: AxiosResponse<any> = await this.appService.createWorkTodo(workTodoPostInput, headers);

      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("work-todos")
  async getWorkTodosByConditions(
    @Query("userId") userId?: number,
    @Query("courseId") courseId?: number,
    @Query("activeDate") activeDate?: Date,
    @Query("maximumActiveDate") maximumActiveDate?: Date
  ) {
    let serviceResult: WorkTodoGetInterface[];

    try {
      const result: AxiosResponse<any> = await this.appService.getWorkTodosByConditions(userId, courseId, activeDate, maximumActiveDate);

      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("work-todos/:id")
  async getWorkTodo(@Param("id") id: number) {
    let serviceResult: any;

    try {
      const result: AxiosResponse<any> = await this.appService.getWorkTodo(id);
      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Delete("work-todos/:id")
  async deleteWorkTodo(@Headers() headers: Record<string, string>, @Param("id") id: number) {
    let serviceResult: any;

    try {
      const result: AxiosResponse<any> = await this.appService.deleteWorkTodo(headers, id);
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
  async createWorkDone(@Headers() headers: Record<string, string>, @Body() workDoneInput: WorkDoneType) {
    let serviceResult: any;

    try {
      const result: AxiosResponse<any> = await this.appService.createWorkDone(workDoneInput, headers);
      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
    return serviceResult;
  }

  @Get("work-dones")
  async getWorkDonesByConditions(@Query("userId") userId?: number, @Query("courseId") courseId?: number) {
    let serviceResult: any;

    try {
      const result: AxiosResponse<any> = await this.appService.getWorkDonesByConditions(userId, courseId);

      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("work-dones/:id")
  async getWorkDone(@Param("id") id: number) {
    let serviceResult: any;

    try {
      const result: AxiosResponse<any> = await this.appService.getWorkDone(id);
      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Delete("work-dones/:id")
  async deleteWorkDone(@Headers() headers: Record<string, string>, @Param("id") id: number) {
    let serviceResult: any;

    try {
      const result: AxiosResponse<any> = await this.appService.deleteWorkDone(headers, id);
      serviceResult = result.data;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }
}
