// use dotenv to read .env vars into Node but silence the Heroku log error for production as no .env will exist
require('dotenv').config( );

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Chatkit = require('pusher-chatkit-server')

const app = express()

const chatkit = new Chatkit.default({
  instanceLocator: "v1:us1:bf8def9e-a084-4d5d-b55c-018e22b58449",
  key: "e4ca655d-422d-4c06-852f-3ead9e2cd075:INafeTcxNJXMZ1VD7nkxQOLTmPnhfizwRZtcrhKjt0w=",
  // url: `https://us1.pusherplatform.io/services/chatkit_token_provider/v1/bf8def9e-a084-4d5d-b55c-018e22b58449/token`
})

app.use(session({
  secret: process.env.SECRET_KEY,     // put this in the heroku environment variables
  saveUninitialized: true,
  resave: true
}));

// if (process.env.NODE_ENV === 'production') {
  const Pusher = require('pusher');

  const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET_KEY,
    cluster: 'us2',
    encrypted: true
  });
// }

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/users', (req, res) => {
  const { username } = req.body
  chatkit
    .createUser({
      id: username,
      name: username
    })
    .then(() => res.sendStatus(201))
    .catch(error => {
      if (error.error === 'services/chatkit/user_already_exists') {
        res.sendStatus(200)
      } else {
        res.status(error.status).json(error)
      }
    })

    pusher.trigger('my-channel', 'my-event', {
      "message": "hello world"
    });
    
})

app.post('/authenticate', (req, res) => {
  // const { grant_type} = req.body
  // res.json(chatkit.authenticate({grant_type}, req.query.user_id))
  const authData = chatkit.authenticate({ userId: req.query.user_id })
  res.status(authData.status).send(authData.body)
})

const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})