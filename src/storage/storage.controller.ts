import { ParseUUIDPipe, Controller, Get, Post, UploadedFile, UseInterceptors, Param } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

import { StorageService } from "./storage.service";

@Controller("storage")
export class StorageController {
  private readonly appService: StorageService;

  constructor(appService: StorageService) {
    this.appService = appService;
  }

  @Get("ping")
  async getServiceName(): Promise<string> {
    try {
      const result = await this.appService.getPing();
      return result;
    } catch (error) {
      return error;
    }
  }

  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  async uploadFile(@UploadedFile() file): Promise<string> {
    try {
      const res = await this.appService.uploadFile(file);
      return res;
    } catch (error) {
      return error;
    }
  }

  @Get("file/base64/:id")
  async getFileByBase64(@Param("id", ParseUUIDPipe) id: string): Promise<any> {
    try {
      const serviceResult = await this.appService.download(id);

      return serviceResult;
    } catch (error) {
      return error;
    }
  }
}
