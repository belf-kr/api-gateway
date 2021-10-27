import { K8sServiceDNS } from "src/common/lib/service";
import { StorageController } from "./storage.controller";
import { StorageService } from "./storage.service";
import { HttpModule, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { StorageApiClient } from "./lib/api";

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        baseURL: K8sServiceDNS("storage-service", configService.get("API_SERVICE_STORAGE_SERVER_PORT")),
      }),
      inject: [ConfigService],
    }),
    StorageModule,
  ],
  controllers: [StorageController],
  providers: [StorageService, StorageApiClient],
  exports: [],
})
export class StorageModule {}
