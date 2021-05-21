import { HttpStatus } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { CServiceInfo } from "./common/common.server-manager";
import { HttpExceptionFilter } from "./filters/http-exception.filter";

let APP_PORT = 3000; // default : let APP_PORT = 3000
let INTERVER_SERVICE_UPDATE = null;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());

  // API GATEWAY 초기 설정
  if (await init()) {
    await app.listen(APP_PORT);
  } else {
    console.error("\n\nAPI SERVICE 서버 초기화에 실패했습니다.\n\n");
    clearInterval(INTERVER_SERVICE_UPDATE);
  }
}
bootstrap();

/**
 * API_GATEWAY 의 서버 초기 설정
 * @returns 초기화 성공 여/부
 */
async function init(): Promise<boolean> {
  let success = true;

  if (!process.env.STAGES) {
    process.env.STAGES = "LOCAL";
    APP_PORT = 3000;
  }

  // MOCK, PRODUCT 서비스에 대한 정보 생성
  const service = CServiceInfo.getInstance();

  await service.update();

  if (service.MOCK_SERVICE.httpStatus != HttpStatus.OK) {
    console.log("\n------------- MOCK SERVICE -------------\n");
    console.error("SERVICE ERROR : Please Check Mock Service");
    success = false;
    console.log(service.MOCK_SERVICE);
  }

  if (service.PRODUCT_SERVICE.httpStatus != HttpStatus.OK) {
    console.log("\n------------- PRODUCT SERVICE -------------\n");
    console.error("SERVICE ERROR : Please Check Product Service");
    success = false;
    console.log(service.PRODUCT_SERVICE);
  }

  if (!success) {
    return false;
  }

  INTERVER_SERVICE_UPDATE = setInterval(() => {
    service.update();
  }, 1000 * 10);

  return success;
}
