import { HttpModule, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { StorageController } from "./storage.controller";
import { StorageApiClient } from "./lib/api";
import { StorageService } from "./storage.service";

import { K8sServiceDNS } from "src/common/lib/service";
import { BelfJwtModule } from "src/belf-jwt/belf-jwt.module";

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        baseURL: K8sServiceDNS("storage-service", configService.get("SERVER_PORT_STORAGE")),
      }),
      inject: [ConfigService],
    }),
    StorageModule,
    BelfJwtModule,
  ],
  controllers: [StorageController],
  providers: [StorageService, StorageApiClient],
  exports: [],
})
export class StorageModule {}
