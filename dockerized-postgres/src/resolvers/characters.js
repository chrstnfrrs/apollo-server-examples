import {
  deleteCharacter,
  insertCharacter,
  selectCharacterById,
  selectCharacters,
  updateCharacter,
} from '../repositories/characters.js'

export const characterResolver = async (root, args, context) => {
  const {id} = args

  const character = await selectCharacterById(Number(id))
  
  return character || null
}

export const charactersResolver = async () => await selectCharacters() || []

export const createCharacterResolver = async (root, args, context) => {
  const {input} = args

  const character = await insertCharacter(input)

  if(!character) throw new Error('Failed to insert character')

  return character
}

export const updateCharacterResolver = async (root, args, context) => {
  const {id, input} = args

  const character = await updateCharacter(Number(id), input)
  
  if (!character) throw new Error('Failed to update character')
  
  return character
}

export const deleteCharacterResolver = async (root, args, context) => {
  const {id} = args

  const status = await deleteCharacter(Number(id))

  return Boolean(status)
} 