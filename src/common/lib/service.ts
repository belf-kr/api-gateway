// FIXME: (parkgang) nestjs spec에 맞게 글로벌 모듈로 동작할 수 있도록 수정해야합니다. 최종적으로 "dotenv" lib를 사용하지 않도록 코딩되어야 합니다.
import { config } from "dotenv";
import { resolve } from "path";
config({
  path: resolve(process.cwd(), process.env.STAGES === "local" ? ".env" : ".env.dev"),
});

/**
 * k8s Service Dns에 맞는 Url를 생성해주는 함수입니다.
 * (기본 스키마: "http://todo-service.qa.svc.cluster.local:3000/")
 * @param svc k8s service 이름
 * @param port k8s service 포트
 * @returns k8s service 에 연결할 수 있는 url
 */
export function K8sServiceDNS(svc: string, port: number): string {
  const ns = process.env.STAGES;

  if (!ns) {
    throw new Error(`STAGES 환경 변수 값이 지정되지 않았습니다.`);
  }

  let url = undefined;
  switch (ns) {
    case "local":
      // TODO: 해당 주소가 사용되고 있는 주소인지 확인하는 방어코드 필요
      url = `http://localhost:${port}`;
      break;
    default:
      url = `http://${svc}.${ns}.svc.cluster.local:${port}`;
      break;
  }

  console.log(`${svc} 서비스가 ${url} 주소로 바인딩에 성공하였습니다.`);
  return url;
}
