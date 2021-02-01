import {
  deleteCharacter,
  insertCharacter,
  selectCharacterById,
  selectCharacters,
  updateCharacter,
} from '../repositories/characters.js'

export const characterResolver = async (context, args, root) => {
  const {id} = args

  const [character] = await selectCharacterById(id)
  
  return character || null
}

export const charactersResolver = async () => await selectCharacters() || []

export const createCharacterResolver = async (context, args, root) => {
  const {input} = args

  const [character] = await insertCharacter(input)

  if(!character) throw new Error('Failed to insert character')

  return character
}

export const updateCharacterResolver = async (context, args, root) => {
  const {id, input} = args

  const [character] = await updateCharacter(id, input)
  
  if (!character) throw new Error('Failed to update character')
  
  return character
}

export const deleteCharacterResolver = async (context, args, root) => {
  const {id} = args

  const status = await deleteCharacter(id)

  return Boolean(status)
} 