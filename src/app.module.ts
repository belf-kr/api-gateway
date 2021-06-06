import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { TodoModule } from "./todo/todo.module";
import { MockModule } from "./mock/mock.module";
import { MiddlewareModule } from "./middleware/middleware.module";

@Module({
  imports: [TodoModule, MockModule, MiddlewareModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
