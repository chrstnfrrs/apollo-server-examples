import db from '../queryBuilder.js'

const TABLE = 'characters'
const COLUMNS = ['id', 'name', 'manga']

export const deleteCharacter = async (id) =>
  db.table(TABLE).del().where({id})

export const insertCharacter = async (character) =>
  db.table(TABLE).insert(character).returning(COLUMNS)

export const selectCharacterById = async (id) =>
  db.table(TABLE).select().where({id})

export const selectCharacters = async () =>
  db.table(TABLE).select()

export const updateCharacter = async (id, character) =>
  db.table(TABLE).where({id}).update(character).returning(COLUMNS)