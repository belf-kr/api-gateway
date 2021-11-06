import { RepeatedDaysOfTheWeekType } from "./repeated-days-of-the-week.type";
import { WorkTodoType } from "./work-todo.type";

export interface WorkTodoPostInterface extends WorkTodoType {
  repeatedDaysOfTheWeek?: RepeatedDaysOfTheWeekType[];
}
