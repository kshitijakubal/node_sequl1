const Sequelize = require('sequelize');
const db = require('../models/index')

const Emp =  db.define("emp",{
        name:Sequelize.STRING,
        email:{
            type: Sequelize.STRING,
            defaultValue: "test@gmail.com"
        },
        gender:{
            type: Sequelize.STRING
        }
    });



module.exports = Emp;