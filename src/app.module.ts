import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import AppConfig from "./config/app.config";

import { StorageModule } from "./storage/storage.module";

import { TodoModule } from "./todo/todo.module";

import { MockModule } from "./mock/mock.module";

import { MiddlewareModule } from "./middleware/middleware.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [AppConfig],
      // prod 환경의 환경변수는 모두 k8s가 컨트롤
      ignoreEnvFile: process.env.NODE_ENV === "production",
      envFilePath: process.env.NODE_ENV === "development" ? ".env.dev" : "",
      validationSchema: Joi.object({
        API_SERVICE_SERVER_PORT: Joi.number().default(3000),
        API_SERVICE_TODO_SERVER_PORT: Joi.number().default(3000),
        API_SERVICE_MOCK_SERVER_PORT: Joi.number().default(3000),
        API_SERVICE_OAUTH_SERVER_PORT: Joi.number().default(3000),
        API_SERVICE_STORAGE_SERVER_PORT: Joi.number().default(3000),
      }),
    }),
    TodoModule,
    MockModule,
    MiddlewareModule,
    StorageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
