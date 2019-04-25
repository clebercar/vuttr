const express = require('express')

const routes = express.Router()

const ToolController = require('./controllers/ToolController')

routes.get('/tools', ToolController.index)
routes.post('/tools', ToolController.store)

module.exports = routes