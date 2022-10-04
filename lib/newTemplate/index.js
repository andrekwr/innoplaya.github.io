const express = require("express");
const parser = require("body-parser");

const app = module.exports = express();
const urlencodedParser = parser.urlencoded({ extended: true })

app.use(urlencodedParser);
app.use(parser.json());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../../views/icoland-package/icolandhtml'));
app.use(function(req, res, next) {
    // Website you wish to allow to connect.
    res.setHeader("Access-Control-Allow-Origin", "*");
  
    // Request methods you wish to allow.
    res.setHeader("Access-Control-Allow-Methods", "POST", "GET");
  
    // Request headers you wish to allow.
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
  
    next();
  });

    
  app.get("/", function(req, res, next) {
    res.render('icoland-package/icolandhtml/home_new')
// res.send(__dirname + '../../views/icoland-package/icolandhtml')    
  });

  
  
