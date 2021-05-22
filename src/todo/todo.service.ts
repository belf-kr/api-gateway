import { Injectable } from "@nestjs/common";
import { IServiceEndpoing, ServiceInfo } from "src/common/common.interface";
import { CServiceInfo } from "src/common/common.service-manager";

@Injectable()
export class TodoService implements IServiceEndpoing {
  GetServiceInfo(): ServiceInfo {
    return CServiceInfo.TODO_SERVICE;
  }
}
