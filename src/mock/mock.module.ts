import { HttpModule, Module } from "@nestjs/common";

import { MockController } from "./mock.controller";
import { MockService } from "./mock.service";

import { MockApiClient } from "./lib/api";

// FIXME: (parkgang) DI 받을 수 있도록 수정되어야 함
import { K8sServiceDNS } from "../common/lib/service";

@Module({
  imports: [
    HttpModule.register({
      baseURL: K8sServiceDNS("mock-service", 3000),
    }),
  ],
  controllers: [MockController],
  providers: [MockService, MockApiClient],
})
export class MockModule {}
