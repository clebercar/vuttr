const Tool = require('../models/Tool')

class ToolController {
  async index (req, res) {
    let tools = await Tool
      .find({}, '-createAt -__v')
      .sort('-createAt')

    if (req.query.tag) {
      tools = tools.filter((el) => el.tags.indexOf(req.query.tag) > -1)
    }

    return res.json(tools)
  }

  async store (req, res) {
    const tool = await Tool.create(req.body)

    return res.json(tool)
  }

  async show (req, res) {
    const tool = await Tool.findById(req.params.id,
      (err, tool) => {
        this.verifyResultQuery(res, err, tool)
      })

    return res.json(tool)
  }

  async destroy (req, res) {
    const id = req.params.id

    Tool.findByIdAndDelete(id,
      (err, tool) => {
        this.verifyResultQuery(res, err, tool)
      })

    return res.sendStatus(200)
  }

  verifyResultQuery (res, err, tool) {
    if (err) {
      return res.json({
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
  }
}

module.exports = new ToolController()
