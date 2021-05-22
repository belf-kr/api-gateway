import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { AppController } from "./app.controller";

import { TodoController } from "./todo/todo.controller";
import { MockController } from "./mock/mock.controller";
import { MockService } from "./mock/mock.service";
import { MockModule } from "./mock/mock.module";
import { TodoModule } from "./todo/todo.module";
import { TodoService } from "./todo/todo.service";
import { LoginRequire } from "./middleware/login.middleware";

@Module({
  imports: [MockModule, TodoModule],
  controllers: [AppController, TodoController, MockController],
  providers: [TodoService, MockService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginRequire).forRoutes({ path: "/*", method: RequestMethod.ALL });
  }
}
