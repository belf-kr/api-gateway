/**
 * 공통 인터페이스
 */

export interface ServiceInfo {
  httpStatus: number;
  version: string;
  name: string;
  port: number;
  url?: string;
  error_code?: number;
}

export interface IServiceEndpoing {
  GetServiceInfo(): ServiceInfo;
}
