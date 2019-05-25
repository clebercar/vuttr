const User = require('../models/User')

class SessionController {
  async store (req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user.checkPassword(password)) {
      return res.status(401).json({ message: 'Incorret password' })
    }

    if (!user) {
      return res.status(401).json({ message: 'User not found' })
    }

    return res.json({
      user,
      token: user.generateToken()
    })
  }
}

module.exports = new SessionController()
