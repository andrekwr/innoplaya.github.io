const express = require("express");
const parser = require("body-parser");

const app = express();


var oldTemplate = require('./lib/oldTemplate')
var newTemplate = require('./lib/newTemplate')
var temp = require('./lib/temp')

app.use(temp)
app.use(oldTemplate)
app.use(newTemplate)

app.listen(3002)
console.log("running 3002")