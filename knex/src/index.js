import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import dotenv from 'dotenv'

import typeDefs from './types/index.js'
import resolvers from './resolvers/index.js'

dotenv.config()

const app = express()

const apolloServer = new ApolloServer({ 
  typeDefs,
  resolvers
 });

apolloServer.applyMiddleware({ app, cors: false })

app.listen(4000, () => {
  console.log('\n🚀  Server ready at http://localhost:4000/graphql\n');
});