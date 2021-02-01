import knex from 'knex'

import knexfile from '../knexfile.js'

export const db = await knex(knexfile.development)

export const queryBuilder = db.queryBuilder()
