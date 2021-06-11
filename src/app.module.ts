import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { TodoModule } from "./todo/todo.module";
import { MockModule } from "./mock/mock.module";
import { MiddlewareModule } from "./middleware/middleware.module";

import AppConfig from "./config/app.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [AppConfig],
      // prod 환경의 환경변수는 모두 k8s가 컨트롤
      ignoreEnvFile: process.env.NODE_ENV === "production",
      envFilePath: process.env.NODE_ENV === "development" ? ".env.dev" : "",
      validationSchema: Joi.object({
        SERVER_PORT: Joi.number().default(3000),
        SERVER_PORT_TODO: Joi.number().default(3000),
        SERVER_PORT_MOCK: Joi.number().default(3000),
        SERVER_PORT_OAUTH: Joi.number().default(3000),
      }),
    }),
    TodoModule,
    MockModule,
    MiddlewareModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
