import knex from '../config/knex.js'

const createCharactersTable = async () => knex.schema.createTable('characters', (table) => {
  table.increments('id')
  table.string('name')
  table.string('manga')
})

const characters = async () => {
  const hasCharacters = await knex.schema.hasTable('characters')
  if (!hasCharacters) {
    await createCharactersTable()
    await knex.table('characters').insert({name: 'Naruto Uzumaki', manga: 'Naruto'})
    await knex.table('characters').insert({name: 'Ichigo Kurosaki', manga: 'Bleach'})
    await knex.table('characters').insert({name: 'Monkey D. Luffy', manga: 'One Piece'})
  }
}

export default characters