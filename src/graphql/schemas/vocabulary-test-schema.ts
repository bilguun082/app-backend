import gql from "graphql-tag";

export const vocabularyTestTypeDefs = gql`
  type VocabularySelectionTest {
    id: String!
    words: [String!]!
    correctAnswer: String!
  }

  type VocabularyTest {
    id: String!
    vocabularySelectionTests: [VocabularySelectionTest!]!
    grade: String!
  }

  input VocabularySelectionTestInput {
    words: [String!]!
    correctAnswer: String!
  }

  input VocabularyTestInput {
    vocabularySelectionTests: [VocabularySelectionTestInput!]!
    grade: String!
  }

  type Query {
    getVocabularyTest(id: String!): VocabularyTest
  }

  type Mutation {
    createVocabularyTest(input: VocabularyTestInput!): VocabularyTest!
    updateVocabularyTest(
      id: String!
      input: VocabularyTestInput!
    ): VocabularyTest!
    deleteVocabularyTest(id: String!): Boolean!
  }
`;
