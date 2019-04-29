const Tool = require('../models/Tool')

class ToolController{
    async index(req, res){ 
        let tools = await Tool
            .find({})
            .select('id title link description tags')
            .sort('-createAt')

        if(req.query.tag)
            tools = tools.filter((el) => el.tags.indexOf(req.query.tag) > -1)

        return res.json(tools)
    }

    async store(req, res){
        const tool = await Tool.create(req.body)

        return res.json(tool)
    }

    async show(req, res){
        const tool = await Tool.findById(req.params.id)

        return res.json(tool)
    }

    async destroy(req, res){
        const id = req.params.id

        await Tool.deleteOne({_id: id})
            .then((tool) => {
                res.status(200).json(tool);
            }, function (error) {
                console.log(error);
                res.sendStatus(500);
            })
    }
}

module.exports = new ToolController