const app = require('express')
const mods = require('./mods.js')
const config = mods.conf

var optionsRouter = app.Router()

optionsRouter.get('/options', (req, res) => {
  res.render('options', Object.assign({
    userQuery: req.query.q,
    strings: mods.getLang(req.cookies, config.lang)
  }, mods.stdRoutes))
})

module.exports = optionsRouter
