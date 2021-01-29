import {gql} from 'apollo-server'

const typeDefs = gql`
  extend type Query {
    hello: String!
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello World'
  },
}

export default {
  typeDefs,
  resolvers
}