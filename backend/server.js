const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./routes/routes');
const db = require('./models');

const port  = process.env.PORT || 3000

const app = express();
app.use(express.static('public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//parse requests of content-type: application/json
app.use(bodyParser.json());

//sync db
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

//parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTES
app.use('/', routes);

//set port, listen for requests
app.listen(port, function(){
	console.log(`Server running on port ${port}`);
});
