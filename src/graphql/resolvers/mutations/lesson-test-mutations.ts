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
          sentence: string;
          words: string[];
          correctForm: string;
          isLast: boolean;
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
