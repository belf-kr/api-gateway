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
    try {
      const res = await this.httpService.get("/api/v1/default/").toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async getPing() {
    try {
      const res = await this.httpService.get("/api/v1/default/ping").toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async getVersion() {
    try {
      const res = await this.httpService.get("/api/v1/default/version").toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async getEnv() {
    try {
      const res = await this.httpService.get("/api/v1/default/env").toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async uploadFile(file): Promise<any> {
    try {
      const form = new FormData();
      form.append("file", file.buffer, { filename: file.originalname });
      const res = await this.httpService
        .post("/api/v1/upload/", form, {
          headers: {
            ...form.getHeaders(),
            "Content-Length": form.getLengthSync(),
          },
        })
        .toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  getFileURL(id): string {
    const baseURL = this.httpService.axiosRef.defaults.baseURL;
    return baseURL + "/api/v1/download/" + id;
  }

  async download(id: string): Promise<AxiosResponse<any>> {
    try {
      const res = await this.httpService.get("/api/v1/download/base64/" + id).toPromise();
      return res;
    } catch (error) {
      throw error;
    }
  }

  async getFileInfomation(id: string): Promise<AxiosResponse<any>> {
    try {
      const res = await this.httpService.get("/api/v1/info/" + id).toPromise();
      return res;
    } catch (error) {
      throw error;
    }
  }
}
