import { createLesson } from "@/services/lesson-service";

export const lessonMutations = {
  createLesson: async (
    _: unknown,
    {
      input,
    }: {
      input: {
        title: string;
        isSaved: boolean;
        facts: Array<{ image: string; fact: string; exampleSentence: string }>;
      };
    }
  ) => createLesson(input),
};
