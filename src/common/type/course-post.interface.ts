import { CourseType } from "./course.type";
import { TagType } from "./tag.type";

export interface CoursePostInterface extends CourseType {
  tags: TagType[];
}
