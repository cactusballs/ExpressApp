// Creating an express server
const express = require('express');
const app = express();
// giving the server a port to listen out for 
const PORT = 3001;

// middleware to parse json
app.use(express.json());

// writing the first route, once the express server is listening it can respond to any and all requests. to tell the server how to deal with these requests we register a series of routes. Routes define the control flow for requests based on the requests path and HTTP verb. Express routes usually take two arguments, a path and a callback function. Below defining a route for the root URL

app.get('/', (req, res) => {
  res.send('Welcome to my Git Cheat Sheet')
} )








// starting the server and listening on the defined port 
app.listen(PORT, () => {
  console.log('Server is listening on ${PORT}');
} )