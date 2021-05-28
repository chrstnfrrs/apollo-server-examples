# Dockerized Postgres Apollo Server Example

This is an example of setting up an Apollo GraphQL Server using typeDefs and resolvers. The Apollo server connects to a PostgreSQL database using Prisma. This application is capable of running a local instance of postgres using docker.

## Commands

1. `yarn` - install dependencies
2. `yarn dev` - run server
3. `yarn docker:infra` - set up postgres database
4. `yarn docker:stop` - remove postgres database

## Database Information

### Running a database migration

`npx prisma migrate dev --name {migration_name}`

### Setting up test data

`yarn setupData`

## Using GraphQL Playground

After running `yarn dev` the graphql server will have a graphql playground available at: `http://localhost:4000/graphql`.

Here you'll have access to multiple graphql queries and mutations.

### Hello Query

The most straight forward query on this server is hello. It's a query that resolves to a static string.

```
query Hello {
  hello
}
```

### Character Queries

An **entity** and **collection** query have been implemented for the character type. Using an id argument on the `character` query will return a specific character if the id is valid. The `characters` query will return a list of all valid characters.

```
query Characters {
  characters{
    id
    name
  }
}

query Naruto{
  character(id:1){
    name
  }
}
```

### Character Mutations

A **create**, **update**, and **delete** mutation has been implemented for the character type.

* Passing in an input argument for `createCharacter` will create a new character with a serialized id.
* Passing in an id argument and input argument for `updateCharacter` will update an existing character. The input will be used to update the character fields on the character with id.
* Passing in an id argument for `deleteCharacter` will return a boolean for sucess of deletion.

```
mutation createKaneki {
  createCharacter(input:{
    name:"Ken Kaneki",
    manga:"Tokyo Ghoul"
  }) {
    id
    name
    manga
  }
}

mutation switchKanekiToBell {
  updateCharacter(
    id: 7,
    input:{
      name:"Bell Cranel",
      manga:"Is it wrong to pick up girls in a dungeon?"
  	}
  ) {
    id
    name
    manga
  }
}

mutation removeExtraCharacter{
  deleteCharacter(id: 7)
}
```