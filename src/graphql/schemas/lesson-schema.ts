import gql from "graphql-tag";

export const lessonTypeDefs = gql`
  type Fact {
    id: String!
    title: String
    image: String
    fact: String!
    exampleSentence: String!
    isLast: Boolean!
  }

  type Lesson {
    id: String!
    title: String!
    isSaved: Boolean!
    isStarted: Boolean
    isDone: Boolean
    facts: [Fact]!
  }

  input LessonInput {
    title: String!
    isSaved: Boolean!
    facts: [FactInput]!
  }

  input FactInput {
    title: String
    image: String
    fact: String!
    exampleSentence: String!
    isLast: Boolean
  }

  input UpdateInput {
    isSaved: Boolean
    isStarted: Boolean
    isDone: Boolean
  }

  type Query {
    getLesson(id: String!): Lesson
    getAllLessons: [Lesson]!
  }

  type Mutation {
    createLesson(input: LessonInput!): Lesson!
    updateLesson(id: String!, input: UpdateInput!): Lesson!
  }
`;
