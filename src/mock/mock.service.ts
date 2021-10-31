import { Injectable } from "@nestjs/common";

import { MockApiClient } from "./lib/api";

@Injectable()
export class MockService {
  private readonly mockApiClient: MockApiClient;

  constructor(mockApiClient: MockApiClient) {
    this.mockApiClient = mockApiClient;
  }

  async getServiceName() {
    let apiClientResult: any;

    try {
      apiClientResult = await this.mockApiClient.getServiceName();
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getPing() {
    let apiClientResult: any;

    try {
      apiClientResult = await this.mockApiClient.getPing();
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getVersion() {
    let apiClientResult: any;

    try {
      apiClientResult = await this.mockApiClient.getVersion();
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getEnv() {
    let apiClientResult: any;

    try {
      apiClientResult = await this.mockApiClient.getEnv();
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getGlass() {
    let apiClientResult: any;

    try {
      apiClientResult = await this.mockApiClient.getGlass();
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }

  async getTodayTodos() {
    let apiClientResult: any;

    try {
      apiClientResult = await this.mockApiClient.getTodayTodos();
    } catch (error) {
      throw error;
    }

    return apiClientResult;
  }
}
