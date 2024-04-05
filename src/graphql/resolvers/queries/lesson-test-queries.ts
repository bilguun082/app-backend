import { getLessonTest } from "@/services/lesson-test-service";

export const lessonTestQueries = {
  getLessonTest: (_: unknown, { title }: { title: string }) =>
    getLessonTest(title),
};
