# Recipe Manager

## Table of contents

- [Introduction and Technologies Used](#introduction-and-technologies-used)
  - [Client](#client)
  - [Server](#server)
  - [Database](#database)
- [Development](#development)
  - [Clone the repository](#clone-the-repository)
  - [Install dependencies](#install-dependencies)
    - [Server](#server)
    - [Client](#client)
    - [Database](#database)


## Introduction and Technologies Used

### Client

- Nuxt (Vue.js)
- Apollo Client

### Server

- Node.js
- GraphQL
- Apollo Server
- Prisma
- Nexus
- TypeScript

### Database

- PostgreSQL

## Development

### Clone the repository

`git clone https://github.com/patrickblackjr/recipemanager.git`

### Install dependencies
#### Server
`cd server && yarn`

#### Client
`cd client && yarn`

### Start development server
#### Server
`yarn dev`

#### Client
`yarn dev`

#### Database
`docker-compose -d up`
