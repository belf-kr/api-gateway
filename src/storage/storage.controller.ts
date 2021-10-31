import { ParseUUIDPipe, Controller, Get, Post, UploadedFile, UseInterceptors, Param, HttpException } from "@nestjs/common";
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
    try {
      const result = await this.appService.getServiceName();
      return result;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
  }

  @Get("ping")
  async getPing(): Promise<string> {
    try {
      const result = await this.appService.getPing();
      return result;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
  }

  @Get("version")
  async getVersion(): Promise<string> {
    try {
      const result = await this.appService.getVersion();
      return result;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
  }

  @Get("env")
  async getEnv(): Promise<NodeJS.ProcessEnv> {
    try {
      const result = await this.appService.getEnv();
      return result;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
  }

  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  async uploadFile(@UploadedFile() file): Promise<string> {
    try {
      const res = await this.appService.uploadFile(file);
      return res;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
  }

  @Get("file/base64/:id")
  async getFileByBase64(@Param("id", ParseUUIDPipe) id: string): Promise<any> {
    try {
      const serviceResult = await this.appService.download(id);

      return serviceResult;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
  }

  @Get("info/:id")
  async getFileInfomation(@Param("id", ParseUUIDPipe) id: string): Promise<any> {
    try {
      const serviceResult = await this.appService.getFileInfomation(id);

      return serviceResult;
    } catch (error) {
      const httpStatusCode = getErrorHttpStatusCode(error);
      const message = getErrorMessage(error);

      throw new HttpException(message, httpStatusCode);
    }
  }
}
