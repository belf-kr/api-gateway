import { version } from "../../package.json";
import { HttpStatus } from "@nestjs/common";

/**
 * @class CServerManager
 * @author Seungup
 * @abstract 공통 서버 메니저 클래스
 * @argument void
 */
export class CServerManager {
  private static instance: CServerManager;
  servers: ServerInfo[] = [];

  constructor() {
    const defaultVersion = "unknown";

    const defaultPing = HttpStatus.FORBIDDEN;

    this.servers.push({
      name: "mock-server",
      status: defaultPing,
      version: defaultVersion,
    });

    this.servers.push({
      name: "product-server",
      status: defaultPing,
      version: defaultVersion,
    });

    this.servers.push({
      name: "api-gateway",
      status: HttpStatus.OK,
      version: version,
    });
  }

  static getInstance() {
    if (!CServerManager.instance) {
      CServerManager.instance = new CServerManager();
    }
    return CServerManager.instance;
  }

  update() {
    CServerManager.instance = new CServerManager();
  }
}
