class UsersService {
  constructor() {
    this.users = [
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
  }

  getUsers() {
    return this.users
  }

  getUserById(userId) {
    const user = this.users.find((user) => {
      user._id === userId
    })

    return user
  }

  createUser(newUser) {
    newUser._id = this.users.length + 1

    this.users.push(newUser)

    return newUser
  }

  updateUser(userId, body) {
    const userIndex = this.users.findIndex((user) => userId === user._id)

    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...body }

      return this.users[userIndex]
    } else {
      throw new Error('Usuário não encontrado')
    }
  }

  deleteUser(userId) {
    const userIndex = this.users.findIndex((user) => userId === user._id)

    if (userIndex !== -1) {
      return this.users.filter((user) => user.id !== userId)
    } else {
      throw new Error('Usuário não encontrado')
    }
  }
}

module.exports = UsersService
