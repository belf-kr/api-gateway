import { IGlasses, ITodos } from "./common.interface";

/**
 * MOCK 서비스 및 TODO 서비스의 구현해야할 함수 목록입니다.
 */
export interface IServiceEndpoint {
  getPlantingGlass(userId: string): Promise<IGlasses>; // 요약정보 가져오기(잔디)
  getTodayTodos(userId: string): Promise<ITodos>; // 오늘 할 일 가져오기
}
