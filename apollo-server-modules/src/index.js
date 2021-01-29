import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import moduleMap from './modules/index.js'

const app = express()

const apolloServer = new ApolloServer({ 
  modules: moduleMap
 });

apolloServer.applyMiddleware({ app, cors: false })

app.listen(4000, () => {
  console.log('🚀  Server ready at http://localhost:4000/graphql');
});