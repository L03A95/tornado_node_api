const { Router } = require('express');
const { getAllMenus, getMenuById, postMenu } = require('../controllers/menuController.ts')

const menuRouter = Router();

menuRouter.get('/', async (req,res) => {
    try {
        const result = await getAllMenus()
        res.status(200).json(result)
    } 
    catch(err) {
        res.status(400).json(err.message)
    }
})

menuRouter.get('/:id', async (req, res) => {
    try{
        const result = await getMenuById(req.params.id)
        if( !result ) {
            res.status(404).json({result: "Ese menu no existe"})
        } else {
            res.status(200).json(result)
        }
    } catch(err) {
        res.status(400).json(err.message)
    }
})

menuRouter.post('/', async (req, res) => {
    try {
        const result = await postMenu(req.body)
        res.status(204).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = {
    menuRouter
}