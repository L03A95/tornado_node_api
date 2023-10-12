const Menu = require('../models/Menu')

const getAllMenus = async () => {
    try {
        return await Menu.find()
    } catch (error) {
        throw new Error(error)
    }
}

const getMenuById = async (id) => {
    try {
        return Menu.find({_id: id})
    } catch (error) {
        throw new Error(error)
    }
}

const postMenus = async (menu) => {
    try {     
        const newMenu = new Menu({...menu})
        await newMenu.save()
    } catch (error) {
        throw new Error(error)
    }
}

const editMenus = async (newMenu, id) => {
    try {
        return await Menu.findOneAndUpdate({ _id: id}, {
            $set: newMenu
        })
    } catch (error) {
        throw new Error(error)
    }
}

const deleteMenu = async (id) => {
    try {
        return await Menu.deleteOne({_id: id})
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getAllMenus,
    getMenuById,
    postMenus,
    editMenus,
    deleteMenu
}