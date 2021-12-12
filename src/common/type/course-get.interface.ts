import { CourseType } from "./course.type";
import { TagType } from "./tag.type";

export interface CourseGetInterface extends CourseType {
  tags: TagType[];
  userEmail: string;
}
