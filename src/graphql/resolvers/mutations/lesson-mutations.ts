import { createLesson, updateLesson } from "@/services/lesson-service";

export const lessonMutations = {
  createLesson: async (
    _: unknown,
    {
      input,
    }: {
      input: {
        title: string;
        isSaved: boolean;
        isStarted: boolean;
        isDone: boolean;
        facts: Array<{
          image: string;
          fact: string;
          exampleSentence: string;
          isLast: boolean;
        }>;
      };
    }
  ) => createLesson(input),
  updateLesson: async (
    _: unknown,
    {
      id,
      input,
    }: {
      id: string;
      input: {
        isSaved: boolean;
        isStarted: boolean;
        isDone: boolean;
      };
    }
  ) => updateLesson(id, input),
};
