import { getVocabularyTest } from "@/services/vocabulary-test-service";

export const vocabularyTestQueries = {
  getVocabularyTest: (_: unknown, { title }: { title: string }) =>
    getVocabularyTest(title),
};
