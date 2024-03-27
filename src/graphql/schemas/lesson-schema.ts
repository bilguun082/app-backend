import gql from "graphql-tag";

export const lessonTypeDefs = gql`
  type Fact {
    id: ID!
    image: String
    fact: String!
    exampleSentence: String!
  }

  type Lesson {
    id: ID!
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
    getLesson(id: ID!): Lesson
    getAllLessons: [Lesson]!
  }

  type Mutation {
    createLesson(input: LessonInput!): Lesson!
    updateLesson(id: ID!, input: LessonInput!): Lesson!
  }
`;
