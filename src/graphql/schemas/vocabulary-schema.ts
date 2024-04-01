import gql from "graphql-tag";

export const vocabularyTypeDefs = gql`
  type Word {
    id: String!
    image: String!
    word: String!
    translation: String!
    exampleSentence: String!
    isSaved: Boolean!
  }

  type Vocabulary {
    id: String!
    title: String!
    words: [Word]!
  }

  input VocabularyInput {
    title: String!
    words: [WordInput]!
  }

  input VocabularyUpdateInput {
    isSaved: Boolean!
  }

  input WordInput {
    image: String!
    word: String!
    translation: String!
    exampleSentence: String!
    isSaved: Boolean!
  }

  type Query {
    getVocabulary(id: String!): Vocabulary
    getAllVocabularies: [Vocabulary]!
  }

  type Mutation {
    createVocabulary(input: VocabularyInput!): Vocabulary!
    updateVocabulary(id: String!, input: VocabularyUpdateInput!): Vocabulary!
  }
`;
