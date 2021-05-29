import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { OauthMiddleware } from "./middleware/oauth.middleware";

import { MockModule } from "../temp/mock/mock.module";

import { TodoModule } from "../temp/todo/todo.module";

@Module({
  imports: [MockModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(OauthMiddleware).forRoutes({ path: "/*", method: RequestMethod.ALL });
  }
}
