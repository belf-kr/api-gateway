import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { CUser } from "src/user/user";
import { CCommonManager } from "./common.manager";

export const User = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request: Request = ctx.switchToHttp().getRequest();
  let jwtToken = request.headers[""];
  let user: CUser = null;
  jwtToken = "12";
  if (jwtToken) {
    user = CCommonManager.getUserByJWT(jwtToken);
  }
  return data ? user?.[data] : user;
});
