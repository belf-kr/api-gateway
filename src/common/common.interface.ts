/**
 * 공통 인터페이스
 */

export interface IServiceInfo {
  httpStatus: number;
  version: string;
  name: string;
  port: number;
  error_code?: number;
}

export interface IGlass {
  date: number;
  count: number;
}

export interface IGlasses {
  glass_list: IGlass[];
}

export interface ITodo {
  reminder_id: string;
  reminder_title: string;
  course_title: string;
  color: string;
}

export interface ITodos {
  todo_list: ITodo[];
}
