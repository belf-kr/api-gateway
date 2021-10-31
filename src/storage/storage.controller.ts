import { Controller, Get, Post, UploadedFile, UseInterceptors, Param, HttpException } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

import { StorageService } from "./storage.service";

import { getErrorHttpStatusCode, getErrorMessage } from "src/common/lib/error";

@Controller("storage")
export class StorageController {
  private readonly appService: StorageService;

  constructor(appService: StorageService) {
    this.appService = appService;
  }

  @Get()
  async getServiceName(): Promise<string> {
    let serviceResult: string;

    try {
      serviceResult = await this.appService.getServiceName();
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("ping")
  async getPing(): Promise<string> {
    let serviceResult: string;

    try {
      serviceResult = await this.appService.getPing();
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("version")
  async getVersion(): Promise<string> {
    let serviceResult: string;

    try {
      serviceResult = await this.appService.getVersion();
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("env")
  async getEnv(): Promise<NodeJS.ProcessEnv> {
    let serviceResult: NodeJS.ProcessEnv;

    try {
      serviceResult = await this.appService.getEnv();
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  async uploadFile(@UploadedFile() file): Promise<string> {
    let serviceResult: string;

    try {
      serviceResult = await this.appService.uploadFile(file);
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("file/base64/:id")
  async getFileByBase64(@Param("id") id: string): Promise<any> {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.download(id);
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }

  @Get("info/:id")
  async getFileInfomation(@Param("id") id: string): Promise<any> {
    let serviceResult: any;

    try {
      serviceResult = await this.appService.getFileInfomation(id);
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }

    return serviceResult;
  }
}
