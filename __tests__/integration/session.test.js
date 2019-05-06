const request = require('supertest')
const app = require('../../config')

const User = require('../../models/User')
const truncate = require('../utils/truncate')

describe('Authentication', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('should authenticate with valid credentials', async () => {
    const user = await User.create({
      name: 'Peter',
      email: 'peter@gmail.com',
      password: '123456'
    })

    const response = await request(app)
      .post('/sessions')
      .send(user)

    expect(response.status).toBe(200)
  })
})
