import { HttpModule, Module } from "@nestjs/common";

import { TestService } from "./test.service";
import { TestController } from "./test.controller";

@Module({
  imports: [HttpModule],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
