import { getLessonTest } from "@/services/lesson-test-service";

export const lessonTestQueries = {
  getLessonTest: (_: unknown, { id }: { id: string }) => getLessonTest(id),
};
