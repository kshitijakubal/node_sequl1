const express = require('express');
const app = express();
const db = require('./models/index')
const exphb = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

db.authenticate()
.then(()=>{
    console.log('Database connected');
})
.catch(err=>{
    console.log("Error = "+err);
})

const userController = require('./controllers/users')

const port  = 8080

app.get('/',(req,res)=>{
    res.send('Home Page')
})
// ROUTES
app.use('/users',require('./routes/users'))


db.sync();


app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})