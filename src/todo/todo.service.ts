import { Injectable } from "@nestjs/common";
import { IGlasses, IServiceInfo, ITodos } from "src/common/common.interface";
import { IServiceEndpoing } from "src/common/common.service-interface";
import { CServiceInfo } from "src/common/common.service-manager";

@Injectable()
export class TodoService implements IServiceEndpoing {
  getPlantingGlass(userId: string): Promise<IGlasses> {
    throw new Error("Method not implemented.");
  }
  getTodayTodos(userId: string): Promise<ITodos> {
    throw new Error("Method not implemented.");
  }

  getServiceInfo(): IServiceInfo {
    return CServiceInfo.TODO_SERVICE;
  }
}
