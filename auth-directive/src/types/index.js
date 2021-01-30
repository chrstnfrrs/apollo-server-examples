import {gql} from 'apollo-server'

import Characters from './characters.js'
import Directives from './directives.js'
import Hello from './hello.js'

const Query = gql`
  type Query
`
const Mutation = gql`
  type Mutation
`

export default [
  Query,
  Mutation,
  Characters,
  Directives,
  Hello,
]