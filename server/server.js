require('dotenv').config()
const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  session = require('express-session'),
  massive = require('massive'),
  axios = require('axios')

const app = express();

app.use(cors())

app.use(bodyParser.json());

const userInfo = require('./decoratorUserInfo')

const getUser = require('./resultsController')


massive(process.env.DB_CONNECTION).then((db) => {
  app.set('db', db)
})

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}))

userInfo(app)

getUser(app)

app.use(express.static(`${__dirname}/../build`))

app.listen(process.env.SERVER_PORT, () => { console.log(`Server listening on port ${process.env.SERVER_PORT}`) })
