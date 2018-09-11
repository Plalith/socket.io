const path = require('path');
const express = require('express');

var publicpath = path.join (__dirname, '../frontend');
var app = express();
app.use(express.static(publicpath));




const port = process.env.PORT || 3000 ;
app.listen(port, ()=>{
    console.log('app running on localhost' + port);
})