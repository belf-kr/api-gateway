import { HttpModule, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { TodoController } from "./todo.controller";
import { TodoService } from "./todo.service";

import { TodoApiClient } from "./lib/api";

import { MockModule } from "../mock/mock.module";

import { K8sServiceDNS } from "../common/lib/service";

import { BelfJwtModule } from "src/belf-jwt/belf-jwt.module";

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        baseURL: K8sServiceDNS("todo-service", configService.get("SERVER_PORT_TODO")),
      }),
      inject: [ConfigService],
    }),
    MockModule,
    BelfJwtModule,
  ],
  controllers: [TodoController],
  providers: [TodoService, TodoApiClient],
  exports: [TodoApiClient],
})
export class TodoModule {}
