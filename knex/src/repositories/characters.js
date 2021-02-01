import {queryBuilder} from '../queryBuilder.js'

const TABLE = 'characters'
const COLUMNS = ['id', 'name', 'manga']

export const deleteCharacter = async (id) =>
  queryBuilder.table(TABLE).del().where({id})

export const insertCharacter = async (character) =>
  queryBuilder.table(TABLE).insert(character).returning(COLUMNS)

export const selectCharacterById = async (id) =>
  queryBuilder.table(TABLE).select().where({id})

export const selectCharacters = async () =>
  queryBuilder.table(TABLE).select()

export const updateCharacter = async (id, character) =>
  queryBuilder.table(TABLE).where({id}).update(character).returning(COLUMNS)