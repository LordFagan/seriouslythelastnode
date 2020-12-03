const express = require('express');
const bodyParser = require('body-parser');
// const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you');
})
.post((req, res) => {
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete((req, res) => {
    res.end('Deleting all partners');
});

partnerRouter.route('/:partnerId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end("Will send all partners with the id " + req.params.partnerId)
})
.post((req, res, next) => {
    res.end('Will add the partner: ' + req.body.name + ' with description: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners/:partnerId');
})
.delete((req, res, next) => {
    res.end('Deleting all partners' + req.params.partnerId);
});

module.exports = partnerRouter;