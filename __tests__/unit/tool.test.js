const factory = require('../factories')
const faker = require('faker')
const Tool = require('../../models/Tool')

describe('Tool', () => {
  let tool

  describe('CREATE', () => {
    beforeEach(async () => {
      tool = await factory.create('Tool')
    })

    it('should create a tool', async () => {
      const createdTool = await Tool.findOne({ name: tool.name })

      expect(tool._id).toEqual(createdTool._id)
    })
  })

  describe('UPDATE', () => {
    beforeEach(async () => {
      tool = await factory.create('Tool')
    })

    it('should update title of tool', async () => {
      const toolUpdate = await tool.updateOne({ title: faker.name.findName() })

      expect(toolUpdate.title).not.toBe(tool.title)
    })
  })

  describe('DELETE', () => {
    beforeEach(async () => {
      tool = await factory.create('Tool')
    })

    it('should delete a tool', async () => {
      const toolDelete = await tool.deleteOne({ id: tool._id })
      const toolExist = await Tool.findOne({ id: toolDelete._id })

      expect(toolExist).toBe(null)
    })
  })

  describe('READ', () => {
    beforeEach(async () => {
      await factory.createMany('Tool', 50)
    })

    it('should return all tools created', async () => {
      const allTools = await Tool.find({})

      expect(allTools.length).toEqual(50)
    })
  })
})
