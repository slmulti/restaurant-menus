const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

// done - create a Menu model
//name = string, location = string, cusinse = string

const Restaurant = db.define('Restaurant', {
    name: {
        type: DataTypes.STRING
    },
    location:{
        type: DataTypes.STRING
    },
    cuisine:{
        type: DataTypes.STRING
    }
})

// async function main(){
//     await Restaurant.sync({force:true})

//     await Restaurant.create({
//         name: 'McDonalds',
//         location: 'London',
//         cuisine: 'American'
//     })
// }

// main()

module.exports = {Restaurant};