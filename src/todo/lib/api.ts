import { HttpService, Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";

import { ExampleUpper, PutExampleUpper } from "../example-upper/example-upper.type";
import { ExampleLower, PutExampleLower } from "../example-lower/example-lower.type";

import { CourseType } from "src/common/type/course.type";
import { WorkTodoType } from "src/common/type/work-todo.type";
import { WorkDoneType } from "src/common/type/work-done.type";

@Injectable()
export class TodoApiClient {
  private readonly httpService: HttpService;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  // 기본 디버깅 Endpoint Group
  async getServiceName() {
    try {
      const res = await this.httpService.get("/").toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async getPing() {
    try {
      const res = await this.httpService.get("/ping").toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async getVersion() {
    try {
      const res = await this.httpService.get("/version").toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async getEnv() {
    try {
      const res = await this.httpService.get("/env").toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  /// MySQL Replication CRUD Test Endpoint Group
  // example-upper
  async postExampleUpper(body: ExampleUpper[]) {
    try {
      const res = await this.httpService.post("/example-upper", body).toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async getExampleUpper(body: ExampleUpper[]) {
    try {
      const res = await this.httpService.get("/example-upper", { data: body }).toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async putExampleUpper(body: PutExampleUpper) {
    try {
      const res = await this.httpService.put("/example-upper", body).toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async deleteExampleUpper(body: ExampleUpper[]) {
    try {
      const res = await this.httpService.delete("/example-upper", { data: body }).toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  // example-lower
  async postExampleLower(body: ExampleLower[]) {
    try {
      const res = await this.httpService.post("/example-lower", body).toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async getExampleLower(body: ExampleLower[]) {
    try {
      const res = await this.httpService.get("/example-lower", { data: body }).toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async putExampleLower(body: PutExampleLower) {
    try {
      const res = await this.httpService.put("/example-lower", body).toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async deleteExampleLower(body: ExampleLower[]) {
    try {
      const res = await this.httpService.delete("/example-lower", { data: body }).toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  // API
  // Color
  async getAllColors(): Promise<AxiosResponse<any>> {
    try {
      return await this.httpService.get("/colors").toPromise();
    } catch (error) {
      throw error;
    }
  }

  // Course
  async createCourse(coursesInput: CourseType): Promise<AxiosResponse<any>> {
    try {
      return await this.httpService.post("/courses", coursesInput).toPromise();
    } catch (error) {
      throw error;
    }
  }

  async getAllCourses(): Promise<AxiosResponse<any>> {
    try {
      return await this.httpService.get("/courses").toPromise();
    } catch (error) {
      throw error;
    }
  }

  async deleteCourse(id: number): Promise<AxiosResponse<any>> {
    try {
      return await this.httpService.delete("/courses/" + id).toPromise();
    } catch (error) {
      throw error;
    }
  }

  // WorkTodo
  async createWorkTodo(workTodoInput: WorkTodoType): Promise<AxiosResponse<any>> {
    try {
      return await this.httpService.post("/work-todos", workTodoInput).toPromise();
    } catch (error) {
      throw error;
    }
  }

  async getAllWorkTodos(): Promise<AxiosResponse<any>> {
    try {
      return await this.httpService.get("/work-todos").toPromise();
    } catch (error) {
      throw error;
    }
  }

  async deleteWorkTodo(id: number): Promise<AxiosResponse<any>> {
    try {
      return await this.httpService.delete("/work-todos/" + id).toPromise();
    } catch (error) {
      throw error;
    }
  }

  // WorkDone
  async createWorkDone(workDoneInput: WorkDoneType): Promise<AxiosResponse<any>> {
    try {
      return await this.httpService.post("/work-dones", workDoneInput).toPromise();
    } catch (error) {
      throw error;
    }
  }

  async getWorkDone(id: number): Promise<AxiosResponse<any>> {
    try {
      return await this.httpService.get("/work-dones/" + id).toPromise();
    } catch (error) {
      throw error;
    }
  }
}
