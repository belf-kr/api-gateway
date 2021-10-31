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
      throw error;
    }
  }

  async getPing() {
    try {
      const result = await this.mockApiClient.getPing();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getVersion() {
    try {
      const result = await this.mockApiClient.getVersion();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getEnv() {
    try {
      const result = await this.mockApiClient.getEnv();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getGlass() {
    try {
      const result = await this.mockApiClient.getGlass();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getTodayTodos() {
    try {
      const result = await this.mockApiClient.getTodayTodos();
      return result;
    } catch (error) {
      throw error;
    }
  }
}
