const Tool = require('../models/Tool')

class ToolController {
  async index (req, res) {
    let tools
    tools = await this.findTool()

    if (req.query.tag) {
      tools = await this.findTool({ 'tags': { $in: req.query.tag } })
    }

    return res.json(tools)
  }

  async store (req, res) {
    const tool = await Tool.create(req.body)

    return res.json(tool)
  }

  async show (req, res) {
    await Tool.findById(req.params.id, (err, tool) => {
      this.verifyResultQuery(res, err, tool)
    })
  }

  async destroy (req, res) {
    const id = req.params.id

    await Tool.findByIdAndDelete(id, (err, tool) => {
      this.verifyResultQuery(res, err, tool)
    })
  }

  verifyResultQuery (res, err, tool) {
    if (err) {
      return res
        .status(400)
        .json({
          success: false,
          msg: 'an error has occurred'
        })
    }

    if (!tool) {
      return res
        .status(404)
        .json({
          success: false,
          msg: 'Tool not found'
        })
    }

    return res.status(200).json(tool)
  }

  async findTool (obj = {}) {
    let tools = await Tool
      .find(obj)
      .sort({ created_at: -1 })

    return tools
  }
}

module.exports = new ToolController()
