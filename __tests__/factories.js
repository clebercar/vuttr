const faker = require('faker')
const { factory } = require('factory-girl')

const User = require('../models/User')
const Tool = require('../models/Tool')

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
})

const generateTags = () => {
  const tags = []
  let count = faker.random.number({
    'min': 5,
    'max': 10
  })

  while (count > 0) {
    tags.push(faker.lorem.word())
    count--
  }

  return tags
}

factory.define('Tool', Tool, {
  title: faker.name.title(),
  link: faker.internet.url(),
  description: faker.lorem.text(),
  tags: generateTags()
})

module.exports = factory
