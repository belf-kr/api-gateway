import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

import { CCommonManager } from "./common/common.manager";
import { HttpExceptionFilter } from "./filters/http-exception.filter";
import { APP_PORT } from "./common/common.define";

async function bootstrap() {
  if (await CCommonManager.initNestJS()) {
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.listen(APP_PORT);
  }
}
bootstrap();
