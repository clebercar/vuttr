const User = require('../../models/User')

describe('Authentication', () => {
  it('should two numbers', async () => {
    const user = await User.create({
      name: 'Peter',
      email: 'peter@gmail.com',
      password: '123456'
    })

    console.log(user)
    expect(user.email).toBe('peter@gmail.com')
  })
})
