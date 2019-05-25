const User = require('../../models/User')

describe('User', () => {
  it('should encrypt user password', async () => {
    const user = await User.create({
      name: 'Peter',
      email: 'peter@gmail.com',
      password: '123456'
    })

    let checkPassword = user.checkPassword(user.password)
    expect(checkPassword).toBe(true)
  })
})
