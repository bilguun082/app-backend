import gql from "graphql-tag";

export const vocabularyTestTypeDefs = gql`
  type VocabularySelectionTest {
    id: String!
    question: String!
    words: [String!]!
    correctAnswer: String!
    isLast: Boolean
  }

  type VocabularyTest {
    id: String!
    title: String!
    vocabularySelectionTests: [VocabularySelectionTest!]!
    grade: String!
  }

  input VocabularySelectionTestInput {
    question: String!
    words: [String!]!
    correctAnswer: String!
    isLast: Boolean
  }

  input VocabularyTestInput {
    title: String!
    vocabularySelectionTests: [VocabularySelectionTestInput!]!
    grade: String!
  }

  input GradeInput {
    grade: String!
  }

  type Query {
    getVocabularyTest(title: String!): VocabularyTest
  }

  type Mutation {
    createVocabularyTest(input: VocabularyTestInput!): VocabularyTest!
    updateVocabularyTest(id: String!, input: GradeInput!): VocabularyTest!
  }
`;
