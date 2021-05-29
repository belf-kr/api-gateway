import { HttpService } from "@nestjs/common";

export class ApiClient {
  private url;

  constructor(private httpService: HttpService) {
    // http://todo-service.qa.svc.cluster.local:3000/
    const svcName = "todo-service";
    const stages = process.env.STAGES;
    this.url = `http://${svcName}.${stages}.svc.cluster.local:3000`;
  }

  async getVersion() {
    try {
      const res = await this.httpService.get(`${this.url}/version`).toPromise();
      return res.data;
    } catch (error) {
      return error;
    }
  }

  async getEnv() {
    try {
      const res = await this.httpService.get(`${this.url}/env`).toPromise();
      return res.data;
    } catch (error) {
      return error;
    }
  }
}
