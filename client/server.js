// use dotenv to read .env vars into Node but silence the Heroku log error for production as no .env will exist
require('dotenv').config( );

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const Chatkit = require('pusher-chatkit-server');

const app = express();

const chatkit = new Chatkit.default({
  // instanceLocator: process.env.REACT_APP_CHATKIT_INSTANCE_LOCATOR,
  // key: process.env.REACT_APP_CHATKIT_KEY ,
  // url: process.env.REACT_APP_CHATKIT_URL
  instanceLocator: "v1:us1:bf8def9e-a084-4d5d-b55c-018e22b58449",
  key: "e4ca655d-422d-4c06-852f-3ead9e2cd075:INafeTcxNJXMZ1VD7nkxQOLTmPnhfizwRZtcrhKjt0w=" ,
  url: `https://us1.pusherplatform.io/services/chatkit_token_provider/v1/bf8def9e-a084-4d5d-b55c-018e22b58449/token`
})

app.use(session({
  secret: process.env.SECRET_KEY,     // put this in the heroku environment variables
  saveUninitialized: true,
  resave: true
}));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//////////////////////
// enable CORS
//////////////////////

// CORS / Chat-Kit
app.use(cors())

app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
  next(); 
});

////////////////////////////
// Heroku Deployment
////////////////////////////
// if (process.env.NODE_ENV === 'production') {
  const Pusher = require('pusher');

  console.log("*** PUSHER ***");
  // console.log("PROD_PUSHER_APP_ID: " + process.env.PROD_PUSHER_APP_ID);
  // console.log("PROD_PUSHER_KEY: " + process.env.PROD_PUSHER_KEY);
  // console.log("PROD_PUSHER_SECRET_KEY: " + process.env.PROD_PUSHER_SECRET_KEY);
  // console.log("PUSHER_URL: " + process.env.PUSHER_URL);

  const pusher = new Pusher.forURL('0994ad65480f56ef8e9c');

  // const pusher = new Pusher({
  //   appId: process.env.PROD_PUSHER_APP_ID,
  //   key: process.env.PROD_PUSHER_KEY,
  //   secret: process.env.PROD_PUSHER_SECRET_KEY,
  //   cluster: 'us2',
  //   encrypted: true
  // });


  pusher.trigger('my-channel', 'my-event', {
    "message": "Hello from NODE jmc"
  });
// }

app.post('/users', (req, res) => {

  pusher.trigger('my-channel', 'my-event', {
    "message": "Hello from NODE jmc"
  });
  
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

    
})

app.post('/authenticate', (req, res) => {
  // const { grant_type} = req.body
  // res.json(chatkit.authenticate({grant_type}, req.query.user_id))
  const authData = chatkit.authenticate({ userId: req.query.user_id })
  res.status(authData.status).send(authData.body)
})

// const PORT = (process.env.CHAT_PORT || 3001)
const PORT =  3001;
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})