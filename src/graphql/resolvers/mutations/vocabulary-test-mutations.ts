import {
  createVocabularyTest,
  updateVocabularyTest,
} from "@/services/vocabulary-test-service";

export const vocabularyTestMutations = {
  createVocabularyTest: async (
    _: unknown,
    {
      input,
    }: {
      input: {
        vocabularySelectionTests: Array<{
          question: string;
          words: string[];
          correctAnswer: string;
        }>;
        grade: string;
      };
    }
  ) => createVocabularyTest(input),
  updateVocabularyTest: async (
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
  ) => updateVocabularyTest(id, input),
};
