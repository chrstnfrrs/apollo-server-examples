import knex from 'knex'

import knexfile from '../knexfile.js'

const db = await knex(knexfile.development)

export default db
