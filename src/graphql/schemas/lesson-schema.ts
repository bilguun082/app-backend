import gql from "graphql-tag";

export const lessonTypeDefs = gql`
  type Fact {
    id: String!
    image: String
    fact: String!
    exampleSentence: String!
  }

  type Lesson {
    id: String!
    title: String!
    isSaved: Boolean!
    facts: [Fact]!
  }

  input LessonInput {
    title: String!
    isSaved: Boolean!
    facts: [FactInput]!
  }

  input FactInput {
    image: String
    fact: String!
    exampleSentence: String!
  }

  type Query {
    getLesson(id: String!): Lesson
    getAllLessons: [Lesson]!
  }

  type Mutation {
    createLesson(input: LessonInput!): Lesson!
    updateLesson(id: String!, input: LessonInput!): Lesson!
  }
`;
