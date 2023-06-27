const express = require('express');
const app = express();
const boadyParser = require('body-parser');
const cors = require('cors')
const sequelize = require('./util/database')
app.use(boadyParser.json({extended:false}))
app.use(cors());
const expenseRoute = require('./rotues/route')

app.use(expenseRoute)





sequelize
.sync( )
.then(result => {
   console.log('database connected')
   app.listen(8000) 
    })
.catch(err => console.log(err))