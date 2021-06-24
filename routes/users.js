const express = require('express');
const router = express.Router();
const db = require('../models/index')
const Users = require('../models/users')

router.get('/',(req,res)=>{
   Users.findAll()
   .then(users => {
       console.log(users);
       res.sendStatus(200)
    })
   .catch(err=>console.log(err))
})

router.get('/add',(req,res)=>{
    const data = {
        name:'Kshitija',
        email:'kshitija@gmail.com',
        gender:'Female'
    }
    let { name, email, gender} = data;
    Users.create({
        name,
        email,
        gender
    })
    .then(user=> res.redirect('/users'))
    .catch(err=>console.log(err));
})

module.exports = router;