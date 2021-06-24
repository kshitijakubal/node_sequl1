const {Sequelize, DataTypes} = require('sequelize');

module.exports = new Sequelize('acc','root','',{
    host:'localhost',
    dialect:'mysql',
    pool:
    {
        max:5,
        min:0,
        idle:10000
    }
});






