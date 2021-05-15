import { CUser } from "src/user/user";

/**
 * @class CCommonManager
 * @author Seungup
 * @abstract 공통메니저 클래스
 * @argument void
 */
export class CCommonManager {
  private static instance: CCommonManager;

  static getInstance() {
    if (!CCommonManager.instance) {
      CCommonManager.instance = new CCommonManager();
    }
    return CCommonManager.instance;
  }

  static getUserByJWT(jwtToken: string): CUser | undefined {
    return new CUser(jwtToken); // for debuging todo : renew this line
  }
}
