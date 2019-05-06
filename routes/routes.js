const ToolController = require('../controllers/ToolController')
const UserController = require('../controllers/UserController')
const SessionController = require('../controllers/SessionController')

module.exports = app => {
  app.route('/tools')
    .get(ToolController.index.bind(ToolController))
    .post(ToolController.store.bind(ToolController))

  app.route('/tools/:id')
    .get(ToolController.show.bind(ToolController))
    .delete(ToolController.destroy.bind(ToolController))

  app.route('/users')
    .get(UserController.index.bind(UserController))
    .post(UserController.store.bind(UserController))

  app.route('/users/:id')
    .get(UserController.show.bind(UserController))
    .delete(UserController.destroy.bind(UserController))

  app.route('/sessions')
    .post(SessionController.store.bind(SessionController))
}
