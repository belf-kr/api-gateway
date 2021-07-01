import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res, UseInterceptors } from "@nestjs/common";
import { Response } from "express";
import * as axios from "axios";

import { TodoService } from "./todo.service";

import { CourseType } from "src/common/type/course.type";
import { WorkTodoType } from "src/common/type/work-todo.type";
import { TrailingSlashInterceptor } from "src/common/interceptor/trailing-slash.interceptor";

@Controller("todo")
@UseInterceptors(TrailingSlashInterceptor)
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

  // API

  @Get("colors")
  async getAllColors(@Res() res: Response) {
    try {
      const result: axios.AxiosResponse = await this.appService.getAllColors();
      res.status(result.status).send(result.data);
    } catch (error) {
      if (error.response.status && error.response.data) {
        res.status(error.response.status).send(error.response.data);
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
      }
    }
  }

  @Post("courses")
  async createCourse(@Res() res: Response, @Body() coursesInput: CourseType) {
    try {
      const result: axios.AxiosResponse = await this.appService.createCourse(coursesInput);
      res.status(result.status).send(result.data);
    } catch (error) {
      if (error.response.status && error.response.data) {
        res.status(error.response.status).send(error.response.data);
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
      }
    }
  }

  @Get("courses")
  async getAllCourses(@Res() res: Response) {
    try {
      const result: axios.AxiosResponse = await this.appService.getAllCourses();
      res.status(result.status).send(result.data);
    } catch (error) {
      if (error.response.status && error.response.data) {
        res.status(error.response.status).send(error.response.data);
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
      }
    }
  }

  @Delete("courses/:id")
  async deleteCourse(@Res() res: Response, @Param() params) {
    try {
      const result: axios.AxiosResponse = await this.appService.deleteCourse(params.id);
      res.status(result.status).send(result.data);
    } catch (error) {
      if (error.response.status && error.response.data) {
        res.status(error.response.status).send(error.response.data);
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
      }
    }
  }

  // WorkTodo
  @Post("work-todos")
  async createWorkTodo(@Res() res: Response, @Body() workTodoInput: WorkTodoType) {
    try {
      const result: axios.AxiosResponse = await this.appService.createWorkTodo(workTodoInput);
      res.status(result.status).send(result.data);
    } catch (error) {
      if (error.response.status && error.response.data) {
        res.status(error.response.status).send(error.response.data);
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
      }
    }
  }

  @Get("work-todos")
  async getAllWorkTodos(@Res() res: Response) {
    try {
      const result: axios.AxiosResponse = await this.appService.getAllWorkTodos();
      res.status(result.status).send(result.data);
    } catch (error) {
      if (error.response.status && error.response.data) {
        res.status(error.response.status).send(error.response.data);
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
      }
    }
  }

  @Delete("work-todos/:id")
  async deleteWorkTodo(@Res() res: Response, @Param() params: any) {
    try {
      const result: axios.AxiosResponse = await this.appService.deleteWorkTodo(params.id);
      res.status(result.status).send(result.data);
    } catch (error) {
      if (error.response.status && error.response.data) {
        res.status(error.response.status).send(error.response.data);
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
      }
    }
  }
}
