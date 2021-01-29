import isAuthenticated from './isAuthenticated.js'

// https://www.graphql-tools.com/docs/directive-resolvers
const directiveResolvers = {
  isAuthenticated,
}

export default directiveResolvers