import {
  createVocabulary,
  updateVocabulary,
} from "@/services/vocabulary-service";

export const vocabularyMutations = {
  createVocabulary: async (
    _: unknown,
    {
      input,
    }: {
      input: {
        title: string;
        isStarted: boolean;
        isDone: boolean;
        words: Array<{
          image: string;
          word: string;
          translation: string;
          exampleSentence: string;
          isSaved: boolean;
          isLast: boolean;
        }>;
      };
    }
  ) => createVocabulary(input),
  updateVocabulary: async (
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
  ) => updateVocabulary(id, input),
};
