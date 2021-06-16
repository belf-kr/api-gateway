import { HttpService, Injectable } from "@nestjs/common";

import { ExampleUpper, PutExampleUpper } from "../example-upper/example-upper.type";
import { ExampleLower, PutExampleLower } from "../example-lower/example-lower.type";

import { CourseType } from "src/common/type/course.type";

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
  async getAllColors() {
    try {
      const res = await this.httpService.get("/color/get-all-colors").toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  // Course
  async createCourse(coursesInput: CourseType) {
    try {
      const res = await this.httpService.post("/course/create-course", coursesInput).toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async getAllCourses() {
    try {
      const res = await this.httpService.get("/course/get-all-courses").toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteCourses(coursesInput: CourseType[]) {
    try {
      const res = await this.httpService.post("/course/delete-courses", coursesInput).toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}
