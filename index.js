const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.json({
    ok: true,
  })
})

app.get('/users', (req, res) => {
  res.json([
    {
      id: 0,
      name: 'José',
      email: 'jose@email.com',
      commits: 150,
      birthdate: '1990-06-01',
      status: true,
    },
    {
      id: 1,
      name: 'Maria',
      email: 'maria@email.com',
      commits: 100,
      birthdate: '1999-07-12',
      status: true,
    },
  ])
})

app.listen(port, () => {
  console.log(`Following express example app and listenin on port ${port}`)
})
