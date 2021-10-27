import { HttpModule, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { TodoController } from "./todo.controller";
import { TodoService } from "./todo.service";

import { TodoApiClient } from "./lib/api";

import { ExampleUpperModule } from "./example-upper/example-upper.module";
import { ExampleLowerModule } from "./example-lower/example-lower.module";

import { MockModule } from "../mock/mock.module";

import { K8sServiceDNS } from "../common/lib/service";

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        baseURL: K8sServiceDNS("todo-service", configService.get("API_SERVICE_TODO_SERVER_PORT")),
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
