'use strict';

const express = require('express');
const app = express();


const logger = require('./middleware/logger.js');
const validator = require("./middleware/validator");
const notFoundHandler = require("./error-handlers/404.js");
const errorHandler = require("./error-handlers/500.js");


// Middlewares 
app.use(logger);



app.get('/person', validator, (req, res) => {
    res.status(200).json({
        name: req.query.name
    });
});


app.post('/wrongMethod', notFoundHandler);





//  Error handlers middleWares
app.use(errorHandler);
app.use('*', notFoundHandler);


function start(PORT) {
    app.listen(PORT, () => console.log('Listening on' + PORT));
}


// Exports 
module.exports = {
    app,
    start
}