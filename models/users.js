const Sequelize = require('sequelize');
const db = require('../models/index')

const User =  db.define("users",{
        name:Sequelize.STRING,
        email:{
            type: Sequelize.STRING,
            defaultValue: "test@gmail.com"
        },
        gender:{
            type: Sequelize.STRING
        }
    });

module.exports = User;