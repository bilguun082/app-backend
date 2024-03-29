import gql from "graphql-tag";

export const lessonTestTypeDefs = gql`
  type SelectionTest {
    id: String!
    type: String!
    words: [String!]!
    correctForm: String!
  }

  type LessonTest {
    id: String!
    selectionTests: [SelectionTest!]!
  }

  input WordSelectionTestInput {
    words: [String!]!
    correctForm: String!
    grade: Float
  }

  input LessonTestInput {
    selectionTests: [SelectionTestInput!]!
  }

  type Query {
    getLessonTest(id: String!): LessonTest
  }

  type Mutation {
    createLessonTest(input: LessonTestInput!): LessonTest!
    updateLessonTest(id: String!, input: LessonTestInput!): LessonTest!
    deleteLessonTest(id: String!): Boolean!
  }
`;
