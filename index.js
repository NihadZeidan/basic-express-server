'use strict';

require('dotenv').config();
const PORT = process.env.PORT

const server = require("./src/server.js");



server.start(PORT);