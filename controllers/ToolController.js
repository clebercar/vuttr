const Tool = require('../models/Tool')

module.exports = {
    async index(req, res){
        const tools = await Tool.find({}).sort('-createAt')

        return res.json(tools)
    },

    async store(req, res){
        const tool = await Tool.create(req.body)

        return res.json(tool)
    },
}