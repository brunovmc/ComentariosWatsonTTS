const routes = require('express').Router();
const comments = require('../controllers/controller')
const watson = require('../client/watson')

routes.post('/addComment', comments.create )

routes.get('/getComments', comments.findAll)

routes.post('/watsonTTS', watson.tts)

module.exports = routes;