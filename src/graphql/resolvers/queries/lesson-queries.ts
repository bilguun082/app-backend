import { getLesson, getAllLessons } from "@/services/lesson-service";

export const lessonQueries = {
  getLesson: (_: unknown, { id }: { id: string }) => getLesson(id),
  getAllLessons: () => getAllLessons(),
};
