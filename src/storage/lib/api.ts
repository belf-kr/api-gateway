import { HttpService, Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";
import * as FormData from "form-data";

@Injectable()
export class StorageApiClient {
  private readonly httpService: HttpService;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  // 기본 디버깅 Endpoint Group
  async getServiceName() {
    let serviceResult: string;

    try {
      const res = await this.httpService.get("/api/v1/default/").toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async getPing() {
    let serviceResult: any;

    try {
      const res = await this.httpService.get("/api/v1/default/ping").toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async getVersion() {
    let serviceResult: any;

    try {
      const res = await this.httpService.get("/api/v1/default/version").toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async getEnv() {
    let serviceResult: any;

    try {
      const res = await this.httpService.get("/api/v1/default/env").toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async uploadFile(file: any, userId: number): Promise<any> {
    let serviceResult: any;

    try {
      const form = new FormData();
      form.append("file", file.buffer, { filename: file.originalname });
      form.append("userId", userId);
      const res = await this.httpService
        .post("/api/v1/upload/", form, {
          headers: {
            ...form.getHeaders(),
            "Content-Length": form.getLengthSync(),
          },
        })
        .toPromise();
      serviceResult = res.data;
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  getFileURL(id: string): string {
    const baseURL = this.httpService.axiosRef.defaults.baseURL;
    return baseURL + "/api/v1/download/" + id;
  }

  async download(id: string): Promise<AxiosResponse<any>> {
    let serviceResult: any;

    try {
      serviceResult = await this.httpService.get("/api/v1/download/base64/" + id).toPromise();
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }

  async getFileInfomation(id: string): Promise<AxiosResponse<any>> {
    let serviceResult: any;

    try {
      serviceResult = await this.httpService.get("/api/v1/info/" + id).toPromise();
    } catch (error) {
      throw error;
    }

    return serviceResult;
  }
}
