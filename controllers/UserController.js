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
    const user = await User.findById(req.params.id,
      (err, user) => {
        this.verifyResultQuery(res, err, user)
      })

    return res.json(user)
  }

  async destroy (req, res) {
    const id = req.params.id

    User.findByIdAndDelete(id,
      (err, user) => {
        this.verifyResultQuery(res, err, user)
      })

    return res.sendStatus(200)
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
  }
}

module.exports = new UserController()
