const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.json({
    ok: true,
  })
})

const users = [
  {
    _id: 0,
    name: 'José',
    email: 'jose@email.com',
    commits: 150,
    birthdate: '1990-06-01',
    status: true,
  },
  {
    _id: 1,
    name: 'Maria',
    email: 'maria@email.com',
    commits: 100,
    birthdate: '1999-07-12',
    status: true,
  },
  {
    _id: 2,
    name: 'Pedro',
    email: 'pedro@email.com',
    commits: 80,
    birthdate: '1986-03-21',
    status: false,
  },
]

app.get('/users', (req, res) => {
  res.status(200).json(users)
})

app.get('/users/:userId', (req, res) => {
  res.status(200).json(users[req.params.userId])
})

app.post('/users', (req, res) => {
  const newUser = {
    _id: users[users.length - 1]._id + 1,
    name: 'Lua' + Math.floor(Math.random() * (100 - 1)),
    email: `lua${Math.floor(Math.random() * (100 - 1))}@email.com`,
    commits: Math.floor(Math.random() * (1000 - 1)),
    birthdate: new Date(),
    status: true,
  }

  users.push(newUser)

  res.status(201).json(users)
})

app.put('/users/:userId', (req, res) => {
  const userId = req.params.userId

  if (!users[userId]) {
    res
      .status(400)
      .send(`User id doens't exist - user_Id: ${req.params.userId}`)
  } else {
    users[userId] = {
      _id: userId,
      name: users[userId].name,
      email: users[userId].email,
      commits: users[userId].commits + 10,
      birthdate: users[userId].birthdate,
      status: users[userId].status,
    }

    res.json(users)
  }
})

app.delete('/users/:userId', (req, res) => {
  const userId = req.params.userId

  if (!users[userId]) {
    res.status(400).send(`User id doens't exist - userId: ${req.params.userId}`)
  } else {
    usersFiltered = users.filter((user) => user.id != userId)
    res.status(200).json(usersFiltered)
  }
})

app.listen(port, () => {
  console.log(`Following express example app and listenin on port ${port}`)
})
