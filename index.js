const express = require("express");
const parser = require("body-parser");

const app = express();


var oldTemplate = require('./lib/oldTemplate')
var newTemplate = require('./lib/newTemplate')
var temp = require('./lib/temp')

app.use(temp)
app.use(oldTemplate)
app.use(newTemplate)

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });