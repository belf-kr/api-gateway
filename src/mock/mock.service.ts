import { Injectable } from "@nestjs/common";

import { MockApiClient } from "./lib/api";

@Injectable()
export class MockService {
  private readonly mockApiClient: MockApiClient;

  constructor(mockApiClient: MockApiClient) {
    this.mockApiClient = mockApiClient;
  }

  async getServiceName() {
    try {
      const result = await this.mockApiClient.getServiceName();
      return result;
    } catch (error) {
      return error;
    }
  }
  async getPing() {
    try {
      const result = await this.mockApiClient.getPing();
      return result;
    } catch (error) {
      return error;
    }
  }
  async getVersion() {
    try {
      const result = await this.mockApiClient.getVersion();
      return result;
    } catch (error) {
      return error;
    }
  }
  async getEnv() {
    try {
      const result = await this.mockApiClient.getEnv();
      return result;
    } catch (error) {
      return error;
    }
  }
}
