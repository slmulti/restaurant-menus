const path = require('path');
const { Sequelize } = require('sequelize');

//done

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './data.sqlite'
})

module.exports = {
    db
};
