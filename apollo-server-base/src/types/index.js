import {gql} from 'apollo-server'

import Hello from './hello.js'
import Characters from './characters.js'

const Query = gql`
  type Query
`
const Mutation = gql`
  type Mutation
`

export default [
  Query,
  Mutation,
  Hello,
  Characters
]