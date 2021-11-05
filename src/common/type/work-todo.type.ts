import { RepeatedDaysOfTheWeekType } from "./repeated-days-of-the-week.type";

export type WorkTodoType = {
  id: number;
  recurringCycleDate: number;
  title: string;
  explanation: string;
  addDate: Date;
  courseId: number;
  courseTitle: string;
  color: string;
  repeatedDaysOfTheWeek?: RepeatedDaysOfTheWeekType[];
};
