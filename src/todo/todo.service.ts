import { Injectable } from "@nestjs/common";

import { IServiceInfo } from "src/common/common.interface";
import { CServiceInfo } from "src/common/common.service-manager";

@Injectable()
export class TodoService {
  getServiceInfo(): IServiceInfo {
    return CServiceInfo.TODO_SERVICE;
  }
}
