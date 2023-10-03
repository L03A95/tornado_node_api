const { Router } = require('express');

const menuRouter = Router();

menuRouter.get('/', async (req,res) => {
    try {
        console.log("bien ahi")
        res.status(200).json({bien: "nice"})
    } catch(err) {
        res.status(400).json(err.message)
    }
})

module.exports = {
    menuRouter
}