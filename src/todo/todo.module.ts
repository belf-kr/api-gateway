import { HttpModule, Module } from "@nestjs/common";

import { TodoController } from "./todo.controller";
import { TodoService } from "./todo.service";

import { TodoApiClient } from "./lib/api";

import { MockModule } from "../mock/mock.module";

// FIXME: (parkgang) DI 받을 수 있도록 수정되어야 함
import { K8sServiceDNS } from "../common/lib/service";

@Module({
  imports: [
    HttpModule.register({
      baseURL: K8sServiceDNS("todo-service", 3000),
    }),
    MockModule,
  ],
  controllers: [TodoController],
  providers: [TodoService, TodoApiClient],
})
export class TodoModule {}
