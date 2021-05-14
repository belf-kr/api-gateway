import { Injectable, HttpService } from "@nestjs/common";

@Injectable()
export class TodoListsService {
  constructor(private httpService: HttpService) {}

  async test() {
    try {
      const res = await this.httpService.get("http://localhost:8200/api/test").toPromise();
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
}
