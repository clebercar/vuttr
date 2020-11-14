const User = require('../models/User')

class UserController {
  async index (req, res) {
    let users = await User
      .find({})
      .sort({ created_at: -1 })

    return res.json(users)
  }

  async store (req, res) {
    const user = await User.create(req.body)

    return res.json(user)
  }

  async show (req, res) {
    await User.findById(req.params.id, (err, user) => {
      this.verifyResultQuery(res, err, user)
    })
  }

  async destroy (req, res) {
    User.findByIdAndDelete(req.params.id, (err, user) => {
      this.verifyResultQuery(res, err, user)
    })
  }

  verifyResultQuery (res, err, user) {
    if (err) {
      return res.json({
        success: false,
        msg: 'an error has occurred'
      })
    }

    if (!user) {
      return res
        .status(404)
        .json({
          success: false,
          msg: 'User not found'
        })
    }

    return res.status(200).json(user)
  }
}

module.exports = new UserController()
