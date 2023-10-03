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

const postMenu = async (menu) => {
    try {
        Menu.create(menu)
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getAllMenus,
    getMenuById,
    postMenu
}