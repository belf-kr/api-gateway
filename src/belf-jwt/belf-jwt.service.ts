import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class BelfJwtService {
  constructor(private readonly jwtService: JwtService) {}

  async getUserId(jwtInput: string) {
    const decodedJwt = this.jwtService.decode(jwtInput);
    const userId = decodedJwt["payload"]["user_id"] ?? undefined;

    return userId;
  }
}
