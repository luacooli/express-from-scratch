# Express API from scratch

## Goals

Create a simple users CRUD API using Express.js framework from scratch without any libraries, frameworks or using any course support.

## TODO

- create initial setup
- update readme to get in instructions on how to run the project
- add a basic route that returns "Hello World!" when accessed at '/'
- create users routes
  - GET `/users`
  - GET `/users/:userId`
  - POST `/users`
  - PUT `/users/:userId`
  - DELETE `/users/:userId`

### User entity

```typescript
type UserType = {
  _id: string
  name: string
  email: string
  commits: number
  birthdate: Date
  status: boolean
}
```

## Steps to start aplication

### install dependencies

```

npm install
```

### serve at localhost:3000

```

npm run dev
```
