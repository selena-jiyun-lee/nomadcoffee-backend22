import { gql } from 'apollo-server';

export default gql`
  type Result {
    ok: Boolean!
    error: String
  }

  type User {
    id: Int!
    username: String!
    email: String!
    name: String!
    location: String
    avatarURL: String
    githubUsername: String
    createdAt: String!
    updatedAt: String!
  }

  type Mutation {
    createAccount(
      username: String!
      email: String!
      name: String!
      location: String
      password: String!
      avatarURL: String
      githubUsername: String
    ): Result
  }

  type Query {
    getUser(username: String!): User
  }
`;
