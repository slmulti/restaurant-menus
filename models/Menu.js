const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

// done - create a Menu model


const Menu = db.define('Menu', {
    title: {
        type: DataTypes.STRING
    },
})

// async function main(){
//     await Menu.sync({force:true})

//     await Menu.create({
//         title: 'saver menu',
//     })
// }

// main()

module.exports = {Menu};