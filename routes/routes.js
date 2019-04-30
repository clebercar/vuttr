const ToolController = require('../controllers/ToolController')

module.exports = app => {
  app.route('/tools')
    .get(ToolController.index.bind(ToolController))
    .post(ToolController.store.bind(ToolController))

  app.route('/tools/:id')
    .get(ToolController.show.bind(ToolController))
    .delete(ToolController.destroy.bind(ToolController))
}
