# Apollo Server Examples

This repository contains examples of Apollo Servers I've made in order to get up and running with Graphql.

* **apollo-modules** - Show's an Apollo server setup using modules. This setup allows for querying, creating, and deleting fields from application state.
* **auth-directives** - Show's an Apollo server setup using typedefs and resolvers with an authorization directive. This setup allows for querying, creating, and deleting fields from application state. The directive can be used in type definitions to ensure a user is authorized to view data. This example ensures an authorization header with an exact value is present before returning a field.
* **base** - Show's an Apollo server setup using typedefs and resolvers. This setup allows for querying, creating, and deleting fields from application state.
