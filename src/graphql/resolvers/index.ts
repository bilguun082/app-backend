import { userQueries } from "./queries/user-queries";
import { userMutations } from "./mutations/user-mutations";
import { lessonQueries } from "./queries/lesson-queries";
import { vocabularyQueries } from "./queries/vocabulary-queries";
import { lessonTestQueries } from "./queries/lesson-test-queries";
import { vocabularyTestQueries } from "./queries/vocabulary-test-queries";
import { lessonMutations } from "./mutations/lesson-mutations";
import { vocabularyMutations } from "./mutations/vocabulary-mutations";
import { lessonTestMutations } from "./mutations/lesson-test-mutations";
import { vocabularyTestMutations } from "./mutations/vocabulary-test-mutations";

export const resolvers = {
  Query: {
    ...userQueries,
    ...lessonQueries,
    ...vocabularyQueries,
    ...lessonTestQueries,
    ...vocabularyTestQueries,
  },
  Mutation: {
    ...userMutations,
    ...lessonMutations,
    ...vocabularyMutations,
    ...lessonTestMutations,
    ...vocabularyTestMutations,
  },
};
