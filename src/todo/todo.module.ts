import { HttpModule, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import * as Joi from "joi";

import { TodoController } from "./todo.controller";
import { TodoService } from "./todo.service";

import { TodoApiClient } from "./lib/api";

import { ExampleUpperModule } from "./example-upper/example-upper.module";
import { ExampleLowerModule } from "./example-lower/example-lower.module";

import { MockModule } from "../mock/mock.module";

import { K8sServiceDNS } from "../common/lib/service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: false,
      // prod 환경의 환경변수는 모두 k8s가 컨트롤
      ignoreEnvFile: process.env.NODE_ENV === "production",
      envFilePath: process.env.NODE_ENV === "development" ? ".env.dev" : "",
      validationSchema: Joi.object({
        TODO_SERVER_PORT: Joi.number().default(3000),
      }),
    }),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        baseURL: K8sServiceDNS("todo-service", configService.get("TODO_SERVER_PORT")),
      }),
      inject: [ConfigService],
    }),
    MockModule,
    ExampleUpperModule,
    ExampleLowerModule,
  ],
  controllers: [TodoController],
  providers: [TodoService, TodoApiClient],
  exports: [TodoApiClient],
})
export class TodoModule {}
