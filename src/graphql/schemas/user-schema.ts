import gql from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: String!
    email: String!
    username: String!
  }

  input UserRegisterInput {
    email: String!
    username: String!
  }

  type Query {
    getUsers: [User]!
    getUser(username: String!): User
  }

  type Mutation {
    registerUser(input: UserRegisterInput!): User!
  }
`;
