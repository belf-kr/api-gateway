import { HttpService, Injectable } from "@nestjs/common";

import { ExampleUpper } from "../example-upper/example-upper.type";

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

  // MySQL Replication CRUD Test Endpoint Group
  async postExampleUpper(body: ExampleUpper[]) {
    try {
      const res = await this.httpService.post("/example-upper", body).toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async getExampleUpper() {
    try {
      const res = await this.httpService.get("/example-upper").toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}
