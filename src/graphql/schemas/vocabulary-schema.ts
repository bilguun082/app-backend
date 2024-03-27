import gql from "graphql-tag";

export const vocabularyTypeDefs = gql`
  type Word {
    id: ID!
    image: String!
    word: String!
    translation: String!
    exampleSentence: String!
    isSaved: Boolean!
  }

  type Vocubary {
    id: ID!
    title: String!
    words: [Word]!
  }

  input VocabularyInput {
    title: String!
    facts: [FactInput]!
  }

  input WordInput {
    image: String!
    fact: String!
    translation: String!
    exampleSentence: String!
    isSaved: Boolean!
  }

  type Query {
    getVocabulary(id: ID!): Vocabulary
    getAllVocabularies: [Vocabulary]!
  }

  type Mutation {
    createVocabulary(input: VocabularyInput!): Vocabulary!
    updateVocabulary(id: ID!, input: VocabularyInput!): Vocabulary!
  }
`;
