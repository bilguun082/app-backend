import gql from "graphql-tag";

export const lessonTestTypeDefs = gql`
  type SelectionTest {
    id: String!
    type: String!
    sentence: String!
    words: [String!]!
    correctForm: String!
    isLast: Boolean
  }

  type LessonTest {
    id: String!
    selectionTests: [SelectionTest!]!
    grade: String!
  }

  input SelectionTestInput {
    type: String!
    sentence: String!
    words: [String!]!
    correctForm: String!
    isLast: Boolean
  }

  input LessonTestInput {
    selectionTests: [SelectionTestInput!]!
    grade: String!
  }

  input GradeInput {
    grade: String!
  }

  type Query {
    getLessonTest(id: String!): LessonTest
  }

  type Mutation {
    createLessonTest(input: LessonTestInput!): LessonTest!
    updateLessonTest(id: String!, input: GradeInput!): LessonTest!
  }
`;
