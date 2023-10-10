const Menu = require('../models/Menu')
const mongoose = require('mongoose')

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
        console.log(newMenu)
        await newMenu.save()
    } catch (error) {
        throw new Error(error)
    }
}

const editMenus = async (newMenu, id) => {
    try {
        return await Menu.update(newMenu, {where:{id: id}})
    } catch (error) {
        throw new Error(error)
    }
}

const deleteMenu = async (id) => {
    try {
        return await Menu.destroy({where: {id: id}})
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