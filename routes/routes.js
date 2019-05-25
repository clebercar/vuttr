const authMiddleware = require('../middlewares/auth')
const ToolController = require('../controllers/ToolController')
const UserController = require('../controllers/UserController')
const SessionController = require('../controllers/SessionController')

const routes = require('express').Router()

routes.post('/sessions', SessionController.store.bind(SessionController))

routes.use(authMiddleware)

routes.get('/tools', ToolController.index.bind(ToolController))
routes.post('/tools', ToolController.store.bind(ToolController))

routes.get('/tools/:id', ToolController.show.bind(ToolController))
routes.delete('/tools/:id', ToolController.destroy.bind(ToolController))

routes.get('/users', UserController.index.bind(UserController))
routes.post('/users', UserController.store.bind(UserController))

routes.get('/users/:id', UserController.show.bind(UserController))
routes.delete('/users/:id', UserController.destroy.bind(UserController))

module.exports = routes
