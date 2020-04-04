const express = require('express');

const paymentDay1 = require('./controllers/paymentDayController1');
const paymentDay2 = require('./controllers/paymentDayController2');


const routes = express.Router();

routes.post('/paymentDay1', paymentDay1.salary);
routes.post('/paymentDay2', paymentDay2.salary);


module.exports = routes;
