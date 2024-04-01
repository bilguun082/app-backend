import { createVocabulary, updateVocabulary } from "@/services/vocabulary-service";

export const vocabularyMutations = {
  createVocabulary: async (
    _: unknown,
    {
      input,
    }: {
      input: {
        title: string;
        words: Array<{
          image: string;
          word: string;
          translation: string;
          exampleSentence: string;
          isSaved: boolean;
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
      };
    }
  ) => updateVocabulary(id, input),
};
