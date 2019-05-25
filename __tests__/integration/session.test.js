const request = require('supertest')
const app = require('../../config')
const factory = require('../factories')

describe('Authentication', () => {
  it('should authenticate with valid credentials', async () => {
    await factory.create('User')

    const userAttrs = await factory.attrs('User')
      .then(attributes => attributes)

    const response = await request(app)
      .post('/sessions')
      .send(userAttrs)

    expect(response.status).toBe(200)
  })

  it('should not authenticate with invalid credentials', async () => {
    const user = await factory.create('User', { password: '1212' })

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '12345'
      })

    expect(response.status).toBe(401)
  })

  it('should return jwt token when authenticated', async () => {
    await factory.create('User')

    const userAttrs = await factory.attrs('User')
      .then(attributes => attributes)

    const response = await request(app)
      .post('/sessions')
      .send(userAttrs)

    expect(response.body).toHaveProperty('token')
  })

  it('should be able to access private routes when authenticated', async () => {
    const user = await factory.create('User')

    const response = await request(app)
      .get('/tools')
      .set('Authorization', `Bearer ${user.generateToken()}`)

    expect(response.status).toBe(200)
  })

  it('should not be able to access private routes whithout jwt token', async () => {
    const response = await request(app)
      .get('/tools')

    expect(response.status).toBe(401)
  })

  it('should not be able to access private routes with invalid jwt token', async () => {
    const response = await request(app)
      .get('/tools')
      .set('Authorization', `Bearer xxxx`)

    expect(response.status).toBe(401)
  })
})
