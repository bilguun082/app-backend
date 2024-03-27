import gql from "graphql-tag";

export const lessonTestTypeDefs = gql`
  type WordSelectionTest {
    id: Int!
    words: [String!]!
    correctSentence: String!
  }

  type FormSelectionTest {
    id: Int!
    options: [String!]!
    correctOptionIndex: Int!
  }

  type LessonTest {
    id: Int!
    wordSelectionTests: [WordSelectionTest!]!
    formSelectionTests: [FormSelectionTest!]!
  }

  input WordSelectionTestInput {
    words: [String!]!
    correctSentence: String!
    grade: Float
  }

  input FormSelectionTestInput {
    options: [String!]!
    correctOptionIndex: Int!
    grade: Float
  }

  input LessonTestInput {
    wordSelectionTests: [WordSelectionTestInput!]! 
    formSelectionTests: [FormSelectionTestInput!]!
  }

  type Query {
    getLessonTest(id: Int!): LessonTest
  }

  type Mutation {
    createLessonTest(input: LessonTestInput!): LessonTest!
    updateLessonTest(id: Int!, input: LessonTestInput!): LessonTest!
    deleteLessonTest(id: Int!): Boolean!
  }
`;
