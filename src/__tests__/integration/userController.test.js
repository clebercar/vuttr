const request = require('supertest')
const app = require('../../config')
const factory = require('../factories')

describe('User Controller', () => {
  let user

  beforeAll(async () => {
    user = await factory.create('User')
  })

  describe('GET Users', () => {
    let users
    let response

    beforeEach(async () => {
      users = await factory.createMany('User', 50)

      response = await request(app)
        .get('/users')
        .set('Authorization', `Bearer ${user.generateToken()}`)
    })

    it('should return all users', () => {
      expect(response.body.length).toEqual(users.length)
    })

    it('should return status 200', () => {
      expect(response.status).toBe(200)
    })
  })

  describe('POST User', () => {
    let userAttrs
    let response

    beforeEach(async () => {
      userAttrs = await factory.attrs('User')
        .then(attributes => attributes)

      response = await request(app)
        .post('/users')
        .set('Authorization', `Bearer ${user.generateToken()}`)
        .send(userAttrs)
    })

    it('should return an users created', async () => {
      expect(typeof response.body).toBe('object')
    })

    it('should return status 200', () => {
      expect(response.status).toBe(200)
    })
  })

  describe('SHOW User', () => {
    let user
    let response

    beforeEach(async () => {
      user = await factory.create('User')

      response = await request(app)
        .get(`/users/${user._id}`)
        .set('Authorization', `Bearer ${user.generateToken()}`)
    })

    it('should return status 200', () => {
      expect(response.status).toBe(200)
    })

    it('should return object with the same id', () => {
      expect(response.body._id).toEqual(String(user._id))
    })
  })

  describe('DELETE User', () => {
    let user
    let response

    beforeEach(async () => {
      user = await factory.create('User')

      response = await request(app)
        .delete(`/users/${user._id}`)
        .set('Authorization', `Bearer ${user.generateToken()}`)
    })

    it('should return status 200', () => {
      expect(response.status).toBe(200)
    })

    it('should return status 404 if user not found', async () => {
      response = await request(app)
        .delete('/users/5ce75dc7ed35c714e9f0c0d0')
        .set('Authorization', `Bearer ${user.generateToken()}`)

      expect(response.status).toBe(404)
      expect(response.body.msg).toBe('User not found')
    })
  })
})
