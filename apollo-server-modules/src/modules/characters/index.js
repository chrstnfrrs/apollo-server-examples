import {gql} from 'apollo-server'
import {
  charactersResolver,
  characterResolver,
  createCharacterResolver,
  deleteCharacterResolver
} from '../../resolvers/characters.js'

const typeDefs = gql`
  extend type Query {
    character(id: ID!): Character
    characters: [Character]!
  }

  extend type Mutation {
    createCharacter(input: CharacterInput!): Character!
    deleteCharacter(id: ID!): Boolean!
  }

  type Character {
    id: ID!
    name: String!
    manga: String!
  }

  input CharacterInput {
    name: String!
    manga: String!
  }
`

const resolvers = {
  Query: {
    character: characterResolver,
    characters: charactersResolver
  },
  Mutation: {
    createCharacter: createCharacterResolver,
    deleteCharacter: deleteCharacterResolver
  }
}

export default {
  typeDefs,
  resolvers
}