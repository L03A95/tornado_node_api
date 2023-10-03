const { Menu } = require('../db')

const getAllMenus = async () => {
    try {
        return await Menu.findAll()
    } catch (error) {
        throw new Error(error)
    }
}

const getMenuById = async (id) => {
    try {
        return Menu.findByPk(id)
    } catch (error) {
        throw new Error(error)
    }
}

const postMenus = async (menu) => {
    try {      
        return await Menu.create(menu)
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