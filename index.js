const express = require('express');
const cookieparser = require('cookie-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');


const Template = require('./welcome');
require('dotenv').config();

const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
app.use(compress())
app.use(helmet())
app.use(cors())

//set up DB connection..
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true})
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB database connection has been established successfully");
})


const userRouter= require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
app.use('/',authRoutes);
app.use('/',userRouter);
/*app.use('/',(req,res)=>{
    res.status(200).send(`<!doctype html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>MERN Skeleton</title>
    </head>
    <body>
    <div id="root">Hello World</div>
    </body>
    </html>`)
});
*/
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Server Started on port %s. ', port)
})