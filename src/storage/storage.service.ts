import { Injectable } from "@nestjs/common";
import { StorageApiClient } from "./lib/api";

@Injectable()
export class StorageService {
  private readonly storageApiClient: StorageApiClient;

  constructor(storageApiClient: StorageApiClient) {
    this.storageApiClient = storageApiClient;
  }

  async getPing() {
    try {
      const result = await this.storageApiClient.getPing();
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

  async download(id) {
    try {
      const res = await this.storageApiClient.download(id);
      return res;
    } catch (error) {
      throw error;
    }
  }
}
