const { Router } = require('express');
const { getAllMenus, getMenuById, postMenus, editMenus, deleteMenu } = require('../controllers/menuController.ts')

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
        const result = await postMenus(req.body)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

menuRouter.put('/:id', async (req, res) => {
    try {
        const result = await editMenus(req.body, req.params.id)
        if (result == [0]) {
            res.status(404).json({error: "No se ha encontrado el menu"})
        } else {
            res.status(202).json(result) 
        }
    } catch (error) {
        res.status(400).json(error.message)
    }
})

menuRouter.delete('/:id', async (req, res) => {
    try {
        const result = await deleteMenu(req.params.id)
        if (result === 0) {
            res.status(404).json({error: "No se ha encontrado el menu"})
        } else {
            res.status(204).json({})
        }
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = {
    menuRouter
}