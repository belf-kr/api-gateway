import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";

import { AppController } from "./app.controller";

import { MockModule } from "./mock/mock.module";

import { TodoModule } from "./todo/todo.module";

import { LoginRequire } from "./middleware/login.middleware";

@Module({
  imports: [MockModule, TodoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginRequire).forRoutes({ path: "/*", method: RequestMethod.ALL });
  }
}
