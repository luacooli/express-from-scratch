const express = require('express')
const app = express()

const port = 3000

const UsersService = require('./users.service')
const users = new UsersService()

app.use(express.json()) // middleware for parsing application/json and populate req.body

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.status(200).json(users.getUsers())
})

app.get('/users/:userId', (req, res) => {
  const userId = parseInt(req.params.userId)

  const user = users.getUserById(userId)

  if (user) {
    res.status(200).json(user)
  } else {
    res.status(404).send('Usuário não encontrado')
  }
})

app.post('/users', (req, res) => {
  const newUser = req.body

  const user = users.createUser(newUser)

  res.status(201).json(user)
})

app.put('/users/:userId', (req, res) => {
  const userId = parseInt(req.params.userId)
  const userData = req.body

  const user = users.updateUser(userId, userData)

  if (user) {
    res.status(200).json(user)
  } else {
    res.json(users)
  }
})

app.delete('/users/:userId', (req, res) => {
  const userId = parseInt(req.params.userId)

  const usersFiltered = users.deleteUser(userId)

  if (usersFiltered) {
    res.status(200).send('Usuário deletado com sucesso!')
  } else {
    res.status(404).send('Usuário não encontrado')
  }
})

app.listen(port, () => {
  console.log(`Following express example app and listenin on port ${port}`)
})
