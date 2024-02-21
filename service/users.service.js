let users = require('../usersList')

class UsersService {
  constructor() {
    this.users = users
  }

  getUsers() {
    return this.users
  }

  getUserById(userId) {
    const user = this.users.find((user) => user.id === userId)

    return user
  }

  findWhere(name) {
    return this.users.filter((user) => {
      return user.name.toLowerCase().includes(name.toLowerCase())
    })
  }

  createUser(newUser) {
    newUser.id = this.users.length + 1

    this.users.push(newUser)

    return newUser
  }

  updateUser(userId, body) {
    const userIndex = this.users.findIndex((user) => userId === user.id)

    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...body }

      return this.users[userIndex]
    }
  }

  deleteUser(userId) {
    const userIndex = this.users.findIndex((user) => userId === user.id)

    if (userIndex !== -1) {
      return this.users.filter((user) => user.id !== userId)
    }
  }
}

module.exports = UsersService
