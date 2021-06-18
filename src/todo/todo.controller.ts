import { Body, Controller, Delete, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { Response } from "express";

import { TodoService } from "./todo.service";

import { CourseType } from "src/common/type/course.type";
import { WorkTodoType } from "src/common/type/work-todo.type";

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
  async getTodayTodos(@Res() res: Response) {
    try {
      const result = await this.appService.getTodayTodos();
      res.status(HttpStatus.OK).send(result);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get("glass")
  async getGlass(@Res() res: Response) {
    try {
      const result = await this.appService.getGlass();
      res.status(HttpStatus.OK).send(result);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get("get-all-colors")
  async getAllColors(@Res() res: Response) {
    try {
      const result = await this.appService.getAllColors();
      res.status(HttpStatus.OK).send(result);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Post("create-course")
  async createCourse(@Res() res: Response, @Body() coursesInput: CourseType) {
    try {
      const result = await this.appService.createCourse(coursesInput);
      res.status(HttpStatus.OK).send(result);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get("get-all-courses")
  async getAllCourses(@Res() res: Response) {
    try {
      const result = await this.appService.getAllCourses();
      res.status(HttpStatus.OK).send(result);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Delete("delete-courses")
  async deleteCourses(@Res() res: Response, @Body() coursesInput: CourseType[]) {
    try {
      const result = await this.appService.deleteCourses(coursesInput);
      res.status(HttpStatus.OK).send(result);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  // WorkTodo
  @Post("create-work-todo")
  async createWorkTodo(@Res() res: Response, @Body() workTodoInput: WorkTodoType) {
    try {
      const result = await this.appService.createWorkTodo(workTodoInput);
      res.status(HttpStatus.OK).send(result);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get("get-all-work-todos")
  async getAllWorkTodos(@Res() res: Response) {
    try {
      const result = await this.appService.getAllWorkTodos();
      res.status(HttpStatus.OK).send(result);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Delete("delete-work-todo")
  async deleteWorkTodo(@Res() res: Response, @Body() workTodoInput: WorkTodoType) {
    try {
      const result = await this.appService.deleteWorkTodo(workTodoInput);
      res.status(HttpStatus.OK).send(result);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}
