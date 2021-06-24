const db = require('../models');
const Users = db.users;

let addUser = async (req,res) => {

    let data = await Users.build({name:'Manisha',email:',manisha@gmail.com'})
    data.save()
    let response = {
        data:'ok'
    }
    res.status(200).json(response)
}

module.exports = {addUser }