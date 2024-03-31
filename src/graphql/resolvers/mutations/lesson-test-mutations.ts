import {
  createLessonTest,
  updateLessonTest,
} from "@/services/lesson-test-service";

export const lessonTestMutations = {
  createLessonTest: async (
    _: unknown,
    {
      input,
    }: {
      input: {
        selectionTests: Array<{
          type: string;
          words: string[];
          correctForm: string;
        }>;
        grade: string;
      };
    }
  ) => createLessonTest(input),
  updateLessonTest: async (
    _: unknown,
    {
      id,
      input,
    }: {
      id: string;
      input: {
        grade: string;
      };
    }
  ) => updateLessonTest(id, input),
};
