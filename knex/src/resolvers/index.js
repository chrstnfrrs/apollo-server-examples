import {
  characterResolver,
  charactersResolver,
  createCharacterResolver,
  updateCharacterResolver,
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
    updateCharacter: updateCharacterResolver,
    deleteCharacter: deleteCharacterResolver
  }
}

export default resolvers