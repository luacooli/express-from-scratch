const express = require('express')
const { spec, swaggerUI } = require('./swaggerConfig')
const app = express()
const port = 3000

app.use(express.json()) // middleware for parsing application/json and populate req.body
app.use('/docs', swaggerUI.serve, swaggerUI.setup(spec))

const UsersService = require('./users.service')
const users = new UsersService()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  try {
    res.status(200).json(users.getUsers())
  } catch (error) {
    res.status(400).send('Bad request')
  }
})

app.get('/users/:userId', (req, res) => {
  try {
    const userId = parseInt(req.params.userId)
    const user = users.getUserById(userId)

    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).send('Usuário não encontrado')
    }
  } catch (error) {
    res.status(400).send('Bad request')
  }
})

app.post('/users', (req, res) => {
  try {
    const newUser = req.body
    const user = users.createUser(newUser)

    res.status(201).json(user)
  } catch (error) {
    res.status(400).send('Bad request')
  }
})

app.put('/users/:userId', (req, res) => {
  try {
    const userId = parseInt(req.params.userId)
    const userData = req.body
    const user = users.updateUser(userId, userData)

    if (user) {
      res.status(200).json(user)
    } else {
      res.json(users)
    }
  } catch (error) {
    res.status(400).send('Bad request')
  }
})

app.delete('/users/:userId', (req, res) => {
  try {
    const userId = parseInt(req.params.userId)
    const usersFiltered = users.deleteUser(userId)

    if (usersFiltered) {
      res.status(200).send('Usuário deletado com sucesso!')
    } else {
      res.status(404).send('Usuário não encontrado')
    }
  } catch (error) {
    res.status(400).send('Bad request')
  }
})

app.listen(port, () => {
  console.log(`Following express example app and listenin on port ${port}`)
})
