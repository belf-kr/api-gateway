import { ParseUUIDPipe, Controller, Get, Post, UploadedFile, UseInterceptors, Param, Response } from "@nestjs/common";
import { StorageService } from "./storage.service";
import { FileInterceptor } from "@nestjs/platform-express";

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

  @Get("file/:id")
  async getFile(@Param("id", ParseUUIDPipe) id, @Response() res): Promise<any> {
    try {
      const result = await this.appService.download(id);

      return res.set(result.headers).body(result.data);
    } catch (error) {
      return error;
    }
  }
}
