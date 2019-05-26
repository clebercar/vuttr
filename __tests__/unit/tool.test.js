const factory = require('../factories')
const faker = require('faker')
const Tool = require('../../models/Tool')

describe('User', () => {
  let tool

  describe('CREATE', () => {
    beforeEach(async () => {
      tool = await factory.create('Tool')
    })

    it('should create a user', async () => {
      const createdTool = await Tool.findOne({ name: tool.name })

      expect(tool._id).toEqual(createdTool._id)
    })
  })

  describe('UPDATE', () => {
    beforeEach(async () => {
      tool = await factory.create('Tool')
    })

    it('should update name of user', async () => {
      const toolUpdate = await tool.updateOne({ title: faker.name.findName() })

      expect(toolUpdate.title).not.toBe(tool.title)
    })
  })

  describe('DELETE', () => {
    beforeEach(async () => {
      tool = await factory.create('Tool')
    })

    it('should delete a user', async () => {
      const toolDelete = await tool.deleteOne({ id: tool._id })
      const toolExist = await Tool.findOne({ id: toolDelete._id })

      expect(toolExist).toBe(null)
    })
  })

  describe('READ', () => {
    beforeEach(async () => {
      await factory.createMany('Tool', 50)
    })

    it('should return all users created', async () => {
      const allTools = await Tool.find({})

      expect(allTools.length).toEqual(50)
    })
  })
})
