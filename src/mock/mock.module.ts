import { HttpModule, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { MockController } from "./mock.controller";
import { MockService } from "./mock.service";

import { MockApiClient } from "./lib/api";

import { K8sServiceDNS } from "src/common/lib/service";

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        baseURL: K8sServiceDNS("mock-service", configService.get("MOCK_SERVER_MODIFIED_PORT")),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [MockController],
  providers: [MockService, MockApiClient],
  exports: [MockApiClient],
})
export class MockModule {}
