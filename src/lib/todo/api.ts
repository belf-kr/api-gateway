import { HttpService } from "@nestjs/common";

export class ApiClient {
  private url;

  constructor(private httpService: HttpService) {
    // http://todo-service.qa.svc.cluster.local:3000/
    const svcName = "todo-service";
    const stages = process.env.STAGES;
    this.url = `http://${svcName}.${stages}.svc.cluster.local:3000`;
  }

  async getServiceName() {
    try {
      // TODO: 추후, 주석을 풀어야 합니다.
      // const endPoint = `${this.url}/`;
      // const res = await this.httpService.get(endPoint).toPromise();
      // return res.data;
      return "하드 코딩 된 서비스 이름";
    } catch (error) {
      throw error;
    }
  }
  async getPing() {
    try {
      const endPoint = `${this.url}/ping`;
      const res = await this.httpService.get(endPoint).toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async getVersion() {
    try {
      const endPoint = `${this.url}/version`;
      const res = await this.httpService.get(endPoint).toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async getEnv() {
    try {
      const endPoint = `${this.url}/env`;
      const res = await this.httpService.get(endPoint).toPromise();
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}
