import {
  getVocabulary,
  getAllVocabularies,
} from "@/services/vocabulary-service";

export const vocabularyQueries = {
  getVocabulary: (_: unknown, { id }: { id: string }) => getVocabulary(id),
  getAllVocabularies: () => getAllVocabularies(),
};
