# Apollo Server Example

This is an example of setting up an Apollo GraphQL Server using typeDefs and resolvers with an authorization directive. The directive can be used in type definitions to ensure a user is authorized to view data.

## Installation

1. `yarn` - install dependencies
2. `yarn dev` - run server

## Using GraphQL Playground

After running `yarn dev` the graphql server will have a graphql playground available at: `http://localhost:4000/graphql`.

Here you'll have access to multiple graphql queries and mutations.

## Authorization Directive

This application applies an authorization directive `isAuthenticated` to the field manga on the type Character. Any attempt to query this field without the proper authorization header will fail.

This boilerplate code uses the authorization header `asdf`.

### Hello Query

The most straight forward query on this server is hello. It's a query that resolves to a static string.

```
query Hello {
  hello
}
```

### Character Queries

An **entity** and **collection** query have been implemented for the character type. Using an id argument on the `character` query will return a specific character if the id is valid. The `characters` query will return a list of all valid characters.

**Any attempts to query the character type with the field manga without the correct authorization header will result in an error**

```
query character($id: ID!){
  character(id:$id){
    id
    name
    manga
  }
}

query characters{
  characters{
    id
    name
    manga
  }
}
```

### Character Mutations

A **create** and **delete** mutation has been implemented for the character type. Passing in an input argument for `createCharacter` will create a new character with a serialized id. Passing in an id argument for `deleteCharacter` will return a boolean for sucess of deletion.

```
mutation CreateCharacter($input:CharacterInput!){
  createCharacter(input:$input){
    id
    name
    manga
  }
}

mutation DeleteCharacter($id:ID!){
  deleteCharacter(id:$id)
}
```