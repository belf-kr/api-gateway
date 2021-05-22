import { HttpStatus } from "@nestjs/common";
import { CCommonMessage } from "./common.message";
import { CServiceInfo } from "./common.server-manager";
import { SERVICE_UPDATE_TIMING } from "./common.define";
import { ServiceInfo } from "./common.interface";

export class CCommonManager {
  static INTERVER_SERVICE_UPDATE: NodeJS.Timeout;

  constructor() {
    // 환경변수 정보 주입
    if (!process.env.STAGES) {
      process.env.STAGES = "LOCAL";
    }
  }
  /**
   *서버 정보로 서버 url 를 가져옵니다.
   * @param serviceInfo
   * @returns server url
   */
  static getServerUrl(serviceInfo: ServiceInfo): string {
    let url = "";
    if (process.env.STAGES == "LOCAL") {
      url = `http://localhost:${serviceInfo.port}`;
    } else {
      url = `http://${serviceInfo.name}.${process.env.STAGES}.svc.cluster.local:${serviceInfo.port}/`;
    }
    return url;
  }
  /**
   * NestJS 서버 초기 설정
   * @returns 초기화 성공 여/부
   */
  static async initNestJS(): Promise<boolean> {
    // 변수 자동 주입
    if (!process.env.STAGES) {
      process.env.STAGES = "LOCAL";
    }

    // 서비스에 대한 정보 생성
    const serviceInfo = CServiceInfo.getInstance();

    // 서비스에 대한 정보 업데이트
    await serviceInfo.update();

    // 서비스 동작 여/부 체크
    if (CServiceInfo.MOCK_SERVICE.httpStatus != HttpStatus.OK && CServiceInfo.TODO_SERVICE.httpStatus != HttpStatus.OK) {
      console.log(CCommonMessage.MSG_NOT_RESPONSE_200);
      console.log(CServiceInfo);
      return false;
    }

    // 서비스에 대한 정보를 업데이트 타이밍에 맞게 정보 업데이트
    CCommonManager.INTERVER_SERVICE_UPDATE = setInterval(() => {
      serviceInfo.update();
    }, SERVICE_UPDATE_TIMING);

    return true;
  }
}
