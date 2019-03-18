'use strict';

// add the dotenv library
require('dotenv').config();

// add express library
const express = require('express');
const app = express();

// create port 3000
const PORT = process.env.PORT || 3000;

// tell express where to find our index.html
app.use(express.static('./public'));

// create a /hello route for express to listen to
// app.get('/hello', (request, response) => {
//   response.status(200).send('hello');
// });

// app.get('/data', (req, res) => {
//   let airplanes = {
//     departure: Date.now(),
//     canFly: true,
//     pilot: 'Well trained'
//   };

//   res.status(200).json(airplanes); // .json method both converts and sends
// });

// Catch-all for routes that don't exist
app.use('*', (req, res) => res.send('Sorry, this route does not exist'));

// turn on the server to listen on PORT
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

