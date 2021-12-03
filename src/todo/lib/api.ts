import { HttpService, Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";

import { ColorType } from "src/common/type/color.type";
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

  async createColor(colorInput: ColorType) {
    let serviceResult: any;

    try {
      serviceResult = await this.httpService.post("/colors", colorInput).toPromise();
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

  async getCoursesByConditions(userId?: number): Promise<AxiosResponse<any>> {
    let serviceResult: any;
    const querystring = userId ? `?userId=${userId}` : "";

    try {
      serviceResult = await this.httpService.get("/courses" + querystring).toPromise();
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async getCourse(id: number): Promise<AxiosResponse<any>> {
    let serviceResult: any;

    try {
      serviceResult = await this.httpService.get("/courses/" + id).toPromise();
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async deleteCourse(userId: number, id: number): Promise<AxiosResponse<any>> {
    let serviceResult: any;
    const querystring = userId ? `?userId=${userId}` : "";

    try {
      serviceResult = await this.httpService.delete("/courses/" + id + querystring).toPromise();
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

  async getWorkTodosByConditions(userId: number, courseId?: number, activeDate?: Date, maximumActiveDate?: Date): Promise<AxiosResponse<any>> {
    let serviceResult: any;

    try {
      let querystring = userId ? `?userId=${userId}` : "";
      querystring = courseId ? querystring + `&courseId=${courseId}` : querystring;
      querystring = courseId ? querystring + `&activeDate=${activeDate}` : querystring;
      querystring = courseId ? querystring + `&maximumActiveDate=${maximumActiveDate}` : querystring;

      serviceResult = await this.httpService.get("/work-todos" + querystring).toPromise();
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async getWorkTodo(id: number): Promise<AxiosResponse<any>> {
    let serviceResult: any;

    try {
      serviceResult = await this.httpService.get("/work-todos/" + id).toPromise();
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async deleteWorkTodo(userId: number, id: number): Promise<AxiosResponse<any>> {
    let serviceResult: any;
    const querystring = userId ? `?userId=${userId}` : "";

    try {
      serviceResult = await this.httpService.delete("/work-todos/" + id + querystring).toPromise();
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

  async getWorkDoneByConditions(userId?: number, courseId?: number): Promise<AxiosResponse<any>> {
    try {
      const res = await this.httpService
        .get("/work-dones", {
          params: {
            userId: userId?.toString(),
            courseId: courseId?.toString(),
          },
        })
        .toPromise();
      return res;
    } catch (error) {
      throw error;
    }
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

  async deleteWorkDone(userId: number, id: number): Promise<AxiosResponse<any>> {
    let serviceResult: any;
    const querystring = userId ? `?userId=${userId}` : "";

    try {
      serviceResult = await this.httpService.delete("/work-dones/" + id + querystring).toPromise();
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }
}
