import { Injectable, HttpService } from "@nestjs/common";

@Injectable()
export class TodoListsService {
  constructor(private httpService: HttpService) {}

  async getList(svcName: string) {
    try {
      // http://todo-service.qa.svc.cluster.local:3000/
      const stages = process.env.STAGES;
      console.log(`stages: ${stages}`);
      const res = await this.httpService.get(`http://${svcName}.${stages}.svc.cluster.local:3000/`).toPromise();
      return res.data;
    } catch (error) {
      return error;
    }
  }
}
