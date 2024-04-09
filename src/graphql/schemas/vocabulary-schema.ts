import gql from "graphql-tag";

export const vocabularyTypeDefs = gql`
  type Word {
    id: String!
    title: String!
    image: String!
    word: String!
    translation: String!
    exampleSentence: String!
    isSaved: Boolean!
    isLast: Boolean
  }

  type Vocabulary {
    id: String!
    title: String!
    words: [Word]!
    isStarted: Boolean
    isDone: Boolean
  }

  input VocabularyInput {
    title: String!
    words: [WordInput]!
  }

  input VocabularyUpdateInput {
    isStarted: Boolean
    isDone: Boolean
  }

  input WordUpdateInput {
    isSaved: Boolean!
  }

  input WordInput {
    title: String!
    image: String!
    word: String!
    translation: String!
    exampleSentence: String!
    isSaved: Boolean!
    isLast: Boolean
  }

  type Query {
    getVocabulary(id: String!): Vocabulary
    getAllVocabularies: [Vocabulary]!
  }

  type Mutation {
    createVocabulary(input: VocabularyInput!): Vocabulary!
    updateVocabulary(id: String!, input: VocabularyUpdateInput!): Vocabulary!
    updateWord(id: String!, wordId: String!, input: WordUpdateInput!): Word!
  }
`;
