const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

function logger (req, res, next){
  console.log(
    `[${new Date().toISOString()}]${req.method}
    to ${req.url} from ${req.get('Origin')}`
  );
  next();
}

server.use(logger);

module.exports = server;