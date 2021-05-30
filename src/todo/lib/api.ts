import { HttpService, Injectable } from "@nestjs/common";

@Injectable()
export class TodoApiClient {
  private httpService: HttpService;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

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
}