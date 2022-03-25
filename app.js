const express = require('express')
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });
const axios = require('axios').default;
const bodyparser = require("body-parser");
const PORT = process.env.PORT || 8080;

// set view engine 
app.set('view engine', 'twig');
// app.set("views",path.resolve(__dirname,"views/liquid"));

//load the assets
app.use('/css', express.static(path.resolve(__dirname, "public/assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "public/assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "public/assets/js")));
app.use(bodyparser.urlencoded({extended:true}));

app.use('/', require('./server/routes/route'));
app.listen(PORT, () => console.log("Server is running!!"));

