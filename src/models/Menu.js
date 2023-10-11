const mongoose = require('mongoose')

const MenuSchema =  new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    active: Boolean,
    category: String
})

const Menu = mongoose.model('Menu', MenuSchema)

module.exports = Menu
