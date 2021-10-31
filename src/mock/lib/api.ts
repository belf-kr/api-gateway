import { HttpService, Injectable } from "@nestjs/common";

@Injectable()
export class MockApiClient {
  private readonly httpService: HttpService;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

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

  async getTodayTodos() {
    let serviceResult: any;

    try {
      const res = await this.httpService.get(`/todo-service/today-todos`).toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async getGlass() {
    let serviceResult: any;

    try {
      const res = await this.httpService.get(`/todo-service/glass`).toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }
}
