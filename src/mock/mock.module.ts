import { HttpModule, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import * as Joi from "joi";

import { MockController } from "./mock.controller";
import { MockService } from "./mock.service";

import { MockApiClient } from "./lib/api";

import { K8sServiceDNS } from "src/common/lib/service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: false,
      // prod 환경의 환경변수는 모두 k8s가 컨트롤
      ignoreEnvFile: process.env.NODE_ENV === "production",
      envFilePath: process.env.NODE_ENV === "development" ? ".env.dev" : "",
      validationSchema: Joi.object({
        MOCK_SERVER_PORT: Joi.number().default(3000),
      }),
    }),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        baseURL: K8sServiceDNS("mock-service", configService.get("MOCK_SERVER_PORT")),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [MockController],
  providers: [MockService, MockApiClient],
  exports: [MockApiClient],
})
export class MockModule {}
