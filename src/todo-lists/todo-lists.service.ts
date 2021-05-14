import { Injectable, HttpService } from "@nestjs/common";

@Injectable()
export class TodoListsService {
  constructor(private httpService: HttpService) {}

  async getList() {
    try {
      const res = await this.httpService.get("http://todo-service.qa.svc.cluster.local:3000/").toPromise();
      return res.data;
    } catch (error) {
      return error;
    }
  }
}
