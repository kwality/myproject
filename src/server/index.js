const express = require('express');
const os = require('os');
const router = express.Router()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const dotenv = require("dotenv")
dotenv.config()

require("../../app_api/models/db")
const routesApi = require('../../app_api/routes/index')

const app = express();

let sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use(express.static('dist'));
app.use('/api', routesApi)


//testing new stuff
app.get("*", function(req, res) {
	res.redirect("/")
})


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
