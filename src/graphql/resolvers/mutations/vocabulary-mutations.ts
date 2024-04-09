import {
  createVocabulary,
  updateVocabulary,
  updateWord,
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
          title: string;
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
      wordId: string;
      input: {
        isStarted: boolean;
        isDone: boolean;
      };
    }
  ) => updateVocabulary(id, input),
  updateWord: async (
    _: unknown,
    {
      id,
      wordId,
      input,
    }: {
      id: string;
      wordId: string;
      input: {
        isSaved: boolean;
      };
    }
  ) => updateWord(id, wordId, input),
};
