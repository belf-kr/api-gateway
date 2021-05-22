import { HttpService } from "@nestjs/common";
import { IServiceInfo } from "./common.interface";
import { CCommonManager } from "./common.manager";

/**
 * @class CServiceInfo
 * @author Seungup
 * @abstract 공통 서비스 정보 클래스
 * @argument void
 */
export class CServiceInfo {
  private static instance: CServiceInfo;
  private httpService: HttpService;

  /**
   * MCOK 서비스에 대한 정보입니다.
   */
  public static MOCK_SERVICE: IServiceInfo;

  /**
   * TODO 서비스에 대한 정보입니다.
   */
  public static TODO_SERVICE: IServiceInfo;

  private constructor() {
    this.httpService = new HttpService();

    CServiceInfo.MOCK_SERVICE = {
      name: "mock-service",
      httpStatus: undefined,
      version: undefined,
      port: 3000,
    };

    CServiceInfo.TODO_SERVICE = {
      name: "todo-service",
      httpStatus: undefined,
      version: undefined,
      port: 3000,
    };

    this.init();
  }

  /**
   * 서비스 클래스를 가져옵니다.
   * @returns CServiceInfo
   */
  public static getInstance() {
    if (!CServiceInfo.instance) {
      CServiceInfo.instance = new CServiceInfo();
    }
    return CServiceInfo.instance;
  }

  /**
   * 서버 정보를 업데이트합니다.
   */
  public async update() {
    await this.updateServiceInfo(CServiceInfo.MOCK_SERVICE);
    await this.updateServiceInfo(CServiceInfo.TODO_SERVICE);
  }

  private init() {
    if (process.env.STAGES == "LOCAL") {
      CServiceInfo.MOCK_SERVICE.port = 3001;
      CServiceInfo.TODO_SERVICE.port = 3002;
    }
  }

  private async updateServiceInfo(service: IServiceInfo) {
    try {
      const url = CCommonManager.getServerUrl(service);
      let res = await this.httpService.get(`${url}/ping`).toPromise();
      service.httpStatus = res.status;
      res = await this.httpService.get(`${url}/version`).toPromise();
      service.version = res.data;
    } catch (error) {
      service.httpStatus = error.errorno;
      service.error_code = error.code;
    }
  }
}
