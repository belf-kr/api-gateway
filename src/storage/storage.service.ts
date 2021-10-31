import { Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";

import { StorageApiClient } from "./lib/api";

@Injectable()
export class StorageService {
  private readonly storageApiClient: StorageApiClient;

  constructor(storageApiClient: StorageApiClient) {
    this.storageApiClient = storageApiClient;
  }

  async getServiceName() {
    try {
      const result = await this.storageApiClient.getServiceName();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getPing() {
    try {
      const result = await this.storageApiClient.getPing();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getVersion() {
    try {
      const result = await this.storageApiClient.getVersion();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getEnv() {
    try {
      const result = await this.storageApiClient.getEnv();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async uploadFile(file): Promise<string> {
    try {
      const res = await this.storageApiClient.uploadFile(file);
      return res;
    } catch (error) {
      throw error;
    }
  }

  getFileURL(id) {
    return this.storageApiClient.getFileURL(id);
  }

  // Return file metadata and file data in json
  async getFileAndFileInformationAsJson(res: AxiosResponse<any>) {
    const fileByJson = new Object();
    Object.assign(fileByJson, res["data"]);

    return fileByJson;
  }

  async download(id: string) {
    try {
      const storageServiceRes = await this.storageApiClient.download(id);
      const fileByJson = await this.getFileAndFileInformationAsJson(storageServiceRes);

      return fileByJson;
    } catch (error) {
      throw error;
    }
  }

  async getFileInfomation(id: string) {
    try {
      const storageServiceRes = await this.storageApiClient.getFileInfomation(id);

      return storageServiceRes["data"];
    } catch (error) {
      throw error;
    }
  }
}
