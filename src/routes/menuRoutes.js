const { Router } = require('express');
const { getAllMenus, getMenuById, postMenus, editMenus, deleteMenu } = require('../controllers/menuController.js')
const {APP_USER, APP_PASSWORD} = process.env
const multer = require('multer');
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dlaqpndlk', 
  api_key: '945541274585366', 
  api_secret: 'ffMXS9C9-76dCwmWnEFQnc-aMZQ' 
});

const menuRouter = Router();

const upload = multer({ dest: 'uploads/' });

menuRouter.post('/upload', upload.single('image'), async (req,res) => {
    try {
        if(!req.file) {
            res.status(404).json({error: "No se recibo ningun archivo"})
        }
        cloudinary.v2.uploader.upload(req.file.path,
        { public_id: "menu" }, 
        function(error, result) {
            if (error) {
                return res.status(400).json(error.message)
            }

            const imageUrl = result.secure_url;
            res.status(200).json(imageUrl);
         });
    } catch (error) {
        res.status(400).json(error.message)
    }
})
 
menuRouter.post('/verify', async (req, res) => {
    try {
        if (req.body.username == APP_USER && req.body.password == APP_PASSWORD) {
            res.status(200).json(true)
        } else {
            res.status(401).json(false)
        }
    } catch (error) {
        res.status(400).json(err.message) 
    }
})

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
            res.status(404).json({result: "No se ha encontrado el menu"})
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
        if (result[0] == 0) {
            res.status(404).json({error: "No se ha encontrado el menu"})
        } else {
            res.status(204).json({}) 
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