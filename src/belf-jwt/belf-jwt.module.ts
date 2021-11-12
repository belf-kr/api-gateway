import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { BelfJwtService } from "./belf-jwt.service";

@Module({
  imports: [JwtModule.register({ secret: "useless-secret" })],
  providers: [BelfJwtService],
  exports: [BelfJwtService],
})
export class BelfJwtModule {}
