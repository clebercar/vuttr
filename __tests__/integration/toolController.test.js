const request = require('supertest')
const app = require('../../config')
const factory = require('../factories')

const createQuery = require('../helpers/createQuery')

describe('Tool Controller', () => {
  let user

  beforeAll(async () => {
    user = await factory.create('User')
  })

  describe('GET Tools', () => {
    let tools
    let response

    beforeEach(async () => {
      tools = await factory.createMany('Tool', 5)

      response = await request(app)
        .get('/tools')
        .set('Authorization', `Bearer ${user.generateToken()}`)
    })

    it('should return all tools', () => {
      expect(response.body.length).toEqual(tools.length)
    })

    it('should return status 200', () => {
      expect(response.status).toBe(200)
    })

    it('should filter by tag', async () => {
      const tool = tools[0]

      response = await request(app)
        .get(`/tools?${createQuery(tool.tags)}`)
        .set('Authorization', `Bearer ${user.generateToken()}`)

      expect(response.body[0].tags)
        .toEqual(expect.arrayContaining(tool.tags))
    })

    it('should return null if there is no tag', async () => {
      const tags = ['node', 'php', 'java']

      response = await request(app)
        .get(`/tools?${createQuery(tags)}`)
        .set('Authorization', `Bearer ${user.generateToken()}`)

      expect(response.body)
        .toEqual([])
    })
  })

  describe('POST Tool', () => {
    let toolAttrs
    let response

    beforeEach(async () => {
      toolAttrs = await factory.attrs('Tool')
        .then(attributes => attributes)

      response = await request(app)
        .post('/tools')
        .set('Authorization', `Bearer ${user.generateToken()}`)
        .send(toolAttrs)
    })

    it('should return an tool created', async () => {
      expect(typeof response.body).toBe('object')
    })

    it('should return status 200', () => {
      expect(response.status).toBe(200)
    })
  })

  describe('SHOW Tool', () => {
    let tool
    let response

    beforeEach(async () => {
      tool = await factory.create('Tool')

      response = await request(app)
        .get(`/tools/${tool._id}`)
        .set('Authorization', `Bearer ${user.generateToken()}`)
    })

    it('should return status 200', () => {
      expect(response.status).toBe(200)
    })

    it('should return object with the same id', () => {
      expect(response.body._id).toEqual(String(tool._id))
    })
  })

  describe('DELETE Tool', () => {
    let tool
    let response

    beforeEach(async () => {
      tool = await factory.create('Tool')

      response = await request(app)
        .delete(`/tools/${tool._id}`)
        .set('Authorization', `Bearer ${user.generateToken()}`)
    })

    it('should return status 200', () => {
      expect(response.status).toBe(200)
    })

    it('should return status 404 if tool not found', async () => {
      response = await request(app)
        .delete('/tools/5ce75dc7ed35c714e9f0c0d0')
        .set('Authorization', `Bearer ${user.generateToken()}`)

      expect(response.status).toBe(404)
      expect(response.body.msg).toBe('Tool not found')
    })
  })
})
