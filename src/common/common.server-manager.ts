import { HttpService, HttpStatus } from "@nestjs/common";

/**
 * @class CServiceInfo
 * @author Seungup
 * @abstract 공통 서비스 정보 클래스
 * @argument void
 */
export class CServiceInfo {
  private static instance: CServiceInfo;
  private httpService: HttpService;
  private stages: string;

  public MOCK_SERVICE: ServiceInfo;
  public PRODUCT_SERVICE: ServiceInfo;

  private constructor() {
    this.httpService = new HttpService();
    this.stages = process.env.STAGES;
    const defaultVersion = "unknown";

    const defaultPing = HttpStatus.INTERNAL_SERVER_ERROR;

    this.MOCK_SERVICE = {
      name: "mock-service",
      httpStatus: defaultPing,
      version: defaultVersion,
      port: 3000,
    };

    this.PRODUCT_SERVICE = {
      name: "todo-service",
      httpStatus: defaultPing,
      version: defaultVersion,
      port: 3000,
    };
    this.init();
  }

  public static getInstance() {
    if (!CServiceInfo.instance) {
      CServiceInfo.instance = new CServiceInfo();
    }
    return CServiceInfo.instance;
  }

  public async update() {
    await this.updateServiceInfo(this.MOCK_SERVICE);
    await this.updateServiceInfo(this.PRODUCT_SERVICE);
  }

  private init() {
    if (process.env.STAGES == "LOCAL") {
      this.MOCK_SERVICE.port = 3001;
      this.PRODUCT_SERVICE.port = 3002;
    }
  }

  private async updateServiceInfo(service: ServiceInfo) {
    let SERVICE_URL = `http://${service.name}.${this.stages}.svc.cluster.local:${service.port}`;
    if (this.stages == "LOCAL") {
      SERVICE_URL = `http://localhost:${service.port}`;
    }
    try {
      let res = await this.httpService.get(`${SERVICE_URL}/ping`).toPromise();
      service.httpStatus = res.status;

      res = await this.httpService.get(`${SERVICE_URL}/version`).toPromise();
      service.version = res.data;
    } catch (error) {
      service.httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
      service.error_code = error.code;
    }
  }
}
