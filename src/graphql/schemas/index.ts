import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { userTypeDefs } from "./user-schema";
import { lessonTypeDefs } from "./lesson-schema";
import { lessonTestTypeDefs } from "./lesson-test-schema";
import { vocabularyTypeDefs } from "./vocabulary-schema";
import { vocabularyTestTypeDefs } from "./vocabulary-test-schema";

export const typeDefs = mergeTypeDefs([
  userTypeDefs,
  lessonTypeDefs,
  vocabularyTypeDefs,
  lessonTestTypeDefs,
  vocabularyTestTypeDefs,
]);
