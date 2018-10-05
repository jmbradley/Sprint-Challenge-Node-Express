const express = require('express');

const cors = require('cors');

const helmet = require('helmet');

const logger = require('morgan');

const actionModel = require('./data/helpers/actionModel');

const projectModel = require('./data/helpers/projectModel');

const server = express();

/////////+++++++++MIDDLEWARE+++++++////////////

server.use(
    express.json(),
    cors(),
    logger(":method :url :status :response-time ms"),
    helmet()
);

///////projectModel routes////////////////////
server.get('/', (req, res) => {
    res
    .status(200)
    .send('<h1> 1,2 x you </h1>')
});


const port = 7682;

server.listen(port, () =>
console.log(`\n=== API is doing the thang on ${port} ===\n`)
)