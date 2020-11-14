const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = new mongoose.Schema({
  name: String,
  email: String,
  password_hash: String
}, {
  timestamps: {
    createdAt: 'created_at'
  }
})

User.virtual('password')
  .get(function () {
    return this.__password
  })
  .set(function (password) {
    this.__password = password
  })

User.pre('save', async function (next) {
  this.password_hash = await bcrypt.hashSync(this.__password, 8)
  next()
})

User.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password_hash, (err, res) => {
    if (res) return true

    console.log(err)
    return false
  })
}

User.methods.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.APP_SECRET)
}

module.exports = mongoose.model('User', User)
