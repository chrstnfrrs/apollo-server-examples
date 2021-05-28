import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import dotenv from 'dotenv'

import typeDefs from './types/index.js'
import resolvers from './resolvers/index.js'
import {prisma} from './adapters/prisma-client'

console.log('starting server')

dotenv.config()

const character = await prisma.character.findUnique({
  where: {
    id: 1,
  },
})

console.log(`sucessfully connected to database, found: ${character.name}`)

const app = express()

const apolloServer = new ApolloServer({ 
  typeDefs,
  resolvers
 });

apolloServer.applyMiddleware({ app, cors: false })

app.listen(4000, () => {
  console.log('\n🚀  Server ready at http://localhost:4000/graphql\n');
});