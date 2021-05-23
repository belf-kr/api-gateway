import { HttpService, Injectable } from "@nestjs/common";
import { IServiceInfo, IGlasses, ITodos } from "src/common/common.interface";
import { CCommonManager } from "src/common/common.manager";
import { IServiceEndpoint } from "src/common/common.service-interface";
import { CServiceInfo } from "src/common/common.service-manager";

@Injectable()
export class MockService implements IServiceEndpoint {
  httpService: HttpService;
  constructor() {
    this.httpService = new HttpService();
  }
  async getPlantingGlass(userId: string): Promise<IGlasses> {
    let result: IGlasses;
    try {
      const url = `${CCommonManager.getServerUrl(CServiceInfo.MOCK_SERVICE)}/${userId}/glass`;
      const res = await this.httpService.get(url).toPromise();
      result = res.data;
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  async getTodayTodos(userId: string): Promise<ITodos> {
    let result;
    try {
      const url = `${CCommonManager.getServerUrl(CServiceInfo.MOCK_SERVICE)}/${userId}/today-todos`;
      console.log(url);
      const res = await this.httpService.get(url).toPromise();
      result = res.data;
    } catch (error) {
      throw new Error(error);
    }
    return result;
  }

  getServiceInfo(): IServiceInfo {
    return CServiceInfo.MOCK_SERVICE;
  }
}
