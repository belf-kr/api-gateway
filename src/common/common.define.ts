/**
 * 공통 전역 변수 파일
 */

export const APP_PORT = 3000; // default : 3000
// 변수 자동 주입
if (!process.env.STAGES) {
  process.env.STAGES = "LOCAL";
}

export const SERVICE_UPDATE_TIMING = 1000 * 1; // default : 1000 * 1
