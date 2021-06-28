import { RepeatedDaysOfTheWeekType } from "./repeated-days-of-the-week.type";

export type WorkTodoType = {
  id?: number;
  courseId: number;
  recurrintCycleDate: number;
  title: string;
  explanation: string;
  passedDay: number;
  addDate: Date;
  repeatedDaysOfTheWeek?: RepeatedDaysOfTheWeekType[];
};
