import { gql } from "apollo-server";

export default gql`
  type Coffee {
    id: Int!,
    name: String!,
    price: Int!
    createAt: String!
  }

  type Query {
    coffees: [Coffee]
  }

  type Mutation {
    createCoffee(name: String!, price: Int!): Coffee
    deleteCoffee(id: Int!): Coffee
  }
`;