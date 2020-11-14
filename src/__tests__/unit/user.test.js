const factory = require('../factories')
const faker = require('faker')
const User = require('../../models/User')

describe('User', () => {
  let user

  describe('CREATE', () => {
    beforeEach(async () => {
      user = await factory.create('User')
    })

    it('should create a user', async () => {
      const createdUser = await User.findOne({ name: user.name })

      expect(user._id).toEqual(createdUser._id)
    })

    it('should encrypt password whenever a user is created', async () => {
      const checkPassword = user.checkPassword(user.password)

      expect(checkPassword).toBe(true)
    })
  })

  describe('UPDATE', () => {
    beforeEach(async () => {
      user = await factory.create('User')
    })

    it('should update name of user', async () => {
      const userUpdate = await user.updateOne({ name: faker.name.findName() })

      expect(userUpdate.name).not.toBe(user.name)
    })
  })

  describe('DELETE', () => {
    beforeEach(async () => {
      user = await factory.create('User')
    })

    it('should delete a user', async () => {
      const userDelete = await user.deleteOne({ id: user._id })
      const userExist = await User.findOne({ id: userDelete._id })

      expect(userExist).toBe(null)
    })
  })

  describe('READ', () => {
    beforeEach(async () => {
      await factory.createMany('User', 50)
    })

    it('should return all users created', async () => {
      const allUsers = await User.find({})

      expect(allUsers.length).toEqual(50)
    })
  })
})
