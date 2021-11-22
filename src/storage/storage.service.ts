import { Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";

import { StorageApiClient } from "./lib/api";

import { BelfJwtService } from "src/belf-jwt/belf-jwt.service";

@Injectable()
export class StorageService {
  private readonly storageApiClient: StorageApiClient;
  private readonly belfJwtService: BelfJwtService;

  constructor(storageApiClient: StorageApiClient, belfJwtService: BelfJwtService) {
    this.storageApiClient = storageApiClient;
    this.belfJwtService = belfJwtService;
  }

  async getServiceName() {
    let apiClientResult: string;

    try {
      apiClientResult = await this.storageApiClient.getServiceName();
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getPing() {
    let apiClientResult: any;

    try {
      apiClientResult = await this.storageApiClient.getPing();
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getVersion() {
    let apiClientResult: any;

    try {
      apiClientResult = await this.storageApiClient.getVersion();
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getEnv() {
    let apiClientResult: any;

    try {
      apiClientResult = await this.storageApiClient.getEnv();
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async uploadFile(headers: Record<string, string>, file: any): Promise<string> {
    let apiClientResult: string;
    const userId = this.belfJwtService.getUserId(headers["authorization"]);

    try {
      apiClientResult = await this.storageApiClient.uploadFile(file, userId);
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  getFileURL(id: string) {
    return this.storageApiClient.getFileURL(id);
  }

  // Return file metadata and file data in json
  async getFileAndFileInformationAsJson(res: AxiosResponse<any>) {
    const fileByJson = new Object();
    Object.assign(fileByJson, res["data"]);

    return fileByJson;
  }

  async download(id: string) {
    let fileByJson;

    try {
      const storageServiceRes = await this.storageApiClient.download(id);
      fileByJson = await this.getFileAndFileInformationAsJson(storageServiceRes);
    } catch (error) {
      throw error;
    }

    return fileByJson;
  }

  async getFileInfomation(id: string) {
    let apiClientResult: any;

    try {
      const storageServiceRes = await this.storageApiClient.getFileInfomation(id);
      apiClientResult = storageServiceRes["data"];
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }
}
