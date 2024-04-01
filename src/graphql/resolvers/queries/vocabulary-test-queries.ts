import { getVocabularyTest } from "@/services/vocabulary-test-service";

export const vocabularyTestQueries = {
  getVocabularyTest: (_: unknown, { id }: { id: string }) =>
    getVocabularyTest(id),
};
