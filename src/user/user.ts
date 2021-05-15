export class CUser {
  id: string;
  nickname: string;
  constructor(jwtToken?: string) {
    if (jwtToken) {
      console.log(jwtToken);
    }
    this.id = "anonymous";
    this.nickname = "anonymous";
  }
}
