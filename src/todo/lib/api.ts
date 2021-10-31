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
    let serviceResult: any;

    try {
      const res = await this.httpService.get("/").toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async getPing() {
    let serviceResult: any;

    try {
      const res = await this.httpService.get("/ping").toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async getVersion() {
    let serviceResult: any;

    try {
      const res = await this.httpService.get("/version").toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async getEnv() {
    let serviceResult: any;

    try {
      const res = await this.httpService.get("/env").toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  /// MySQL Replication CRUD Test Endpoint Group
  // example-upper
  async postExampleUpper(body: ExampleUpper[]) {
    let serviceResult: any;

    try {
      const res = await this.httpService.post("/example-upper", body).toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async getExampleUpper(body: ExampleUpper[]) {
    let serviceResult: any;

    try {
      const res = await this.httpService.get("/example-upper", { data: body }).toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async putExampleUpper(body: PutExampleUpper) {
    let serviceResult: any;

    try {
      const res = await this.httpService.put("/example-upper", body).toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async deleteExampleUpper(body: ExampleUpper[]) {
    let serviceResult: any;

    try {
      const res = await this.httpService.delete("/example-upper", { data: body }).toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  // example-lower
  async postExampleLower(body: ExampleLower[]) {
    let serviceResult: any;

    try {
      const res = await this.httpService.post("/example-lower", body).toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async getExampleLower(body: ExampleLower[]) {
    let serviceResult: any;

    try {
      const res = await this.httpService.get("/example-lower", { data: body }).toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async putExampleLower(body: PutExampleLower) {
    let serviceResult: any;

    try {
      const res = await this.httpService.put("/example-lower", body).toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async deleteExampleLower(body: ExampleLower[]) {
    let serviceResult: any;

    try {
      const res = await this.httpService.delete("/example-lower", { data: body }).toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  // API
  // Color
  async getAllColors(): Promise<AxiosResponse<any>> {
    let serviceResult: any;

    try {
      serviceResult = await this.httpService.get("/colors").toPromise();
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  // Course
  async createCourse(coursesInput: CourseType): Promise<AxiosResponse<any>> {
    let serviceResult: any;

    try {
      serviceResult = await this.httpService.post("/courses", coursesInput).toPromise();
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async getAllCourses(): Promise<AxiosResponse<any>> {
    let serviceResult: any;

    try {
      serviceResult = await this.httpService.get("/courses").toPromise();
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async deleteCourse(id: number): Promise<AxiosResponse<any>> {
    let serviceResult: any;

    try {
      serviceResult = await this.httpService.delete("/courses/" + id).toPromise();
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  // WorkTodo
  async createWorkTodo(workTodoInput: WorkTodoType): Promise<AxiosResponse<any>> {
    let serviceResult: any;

    try {
      serviceResult = await this.httpService.post("/work-todos", workTodoInput).toPromise();
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async getWorkTodosByConditions(courseId?: number): Promise<AxiosResponse<any>> {
    let serviceResult: any;

    try {
      const queryString = courseId ? `?courseId=${courseId}` : "";
      serviceResult = await this.httpService.get("/work-todos" + queryString).toPromise();
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async deleteWorkTodo(id: number): Promise<AxiosResponse<any>> {
    let serviceResult: any;

    try {
      serviceResult = await this.httpService.delete("/work-todos/" + id).toPromise();
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  // WorkDone
  async createWorkDone(workDoneInput: WorkDoneType): Promise<AxiosResponse<any>> {
    let serviceResult: any;

    try {
      serviceResult = await this.httpService.post("/work-dones", workDoneInput).toPromise();
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async getWorkDone(id: number): Promise<AxiosResponse<any>> {
    let serviceResult: any;

    try {
      serviceResult = await this.httpService.get("/work-dones/" + id).toPromise();
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }
}
