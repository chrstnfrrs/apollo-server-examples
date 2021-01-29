import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import typeDefs from './types/index.js'
import resolvers from './resolvers/index.js'
import directiveResolvers from  './directive-resolvers/index.js'

const app = express()

const schema = makeExecutableSchema({ 
  typeDefs,
  resolvers,
  directiveResolvers,
 })

const apolloServer = new ApolloServer({
  schema,
  context: ({ req }) => {
    // To find out the correct arguments for a specific integration,
    // see the `context` option in the API reference for `apollo-server`:
    // https://www.apollographql.com/docs/apollo-server/api/apollo-server/
    const token = req.headers.authorization || '';
    return { token };
  }
});

apolloServer.applyMiddleware({ app, cors: false })

app.listen(4000, () => {
  console.log('🚀  Server ready at http://localhost:4000/graphql');
});