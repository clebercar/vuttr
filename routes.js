const express = require('express')

const routes = express.Router()

const ToolController = require('./controllers/ToolController')

routes.get('/tools', ToolController.index.bind(ToolController))
routes.get('/tools/:id', ToolController.show)
routes.post('/tools', ToolController.store)
routes.delete('/tools/:id', ToolController.destroy);

module.exports = routes