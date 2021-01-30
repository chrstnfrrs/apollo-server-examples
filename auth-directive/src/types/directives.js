import {gql} from 'apollo-server'

const directives = gql`
  directive @isAuthenticated on FIELD | FIELD_DEFINITION
`

export default directives