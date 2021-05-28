import {gql} from 'apollo-server'

const characterTypes = gql`
  extend type Query {
    character(id: ID!): Character
    characters: [Character]!
  }

  extend type Mutation {
    createCharacter(input: CharacterInput!): Character!
    updateCharacter(id: ID!, input: CharacterUpdate!): Character!
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

  input CharacterUpdate {
    name: String
    manga: String
  }
`

export default characterTypes
