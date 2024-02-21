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

  findWhere(name, email) {
    const n = name ? name.toLowerCase() : ''
    const e = email ? email.toLowerCase() : ''

    return this.users.filter((user) => {
      return (
        user.name.toLowerCase().includes(n) &&
        user.email.toLowerCase().includes(e)
      )
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

    return null
  }

  deleteUser(userId) {
    const userIndex = this.users.findIndex((user) => userId === user.id)

    if (userIndex !== -1) {
      return this.users.filter((user) => user.id !== userId)
    }

    return null
  }
}

module.exports = UsersService
