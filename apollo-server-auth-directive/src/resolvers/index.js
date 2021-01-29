import {
  characterResolver,
  charactersResolver,
  createCharacterResolver,
  deleteCharacterResolver
} from './characters.js'

const resolvers = {
  Query: {
    character: characterResolver,
    characters: charactersResolver,
    hello: () => 'Hello World'
  },
  Mutation: {
    createCharacter: createCharacterResolver,
    deleteCharacter: deleteCharacterResolver
  }
}

export default resolvers