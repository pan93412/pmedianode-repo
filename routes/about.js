const app = require('express')
const mods = require('./mods.js')
const config = mods.conf

var aboutRouter = app.Router()

aboutRouter.get('/about', (req, res) => {
  res.render('about', Object.assign({
    userQuery: req.query.q,
    showAuthors: config.showAuthors,
    strings: mods.getLang(req.cookies, config.lang)
  }, mods.stdRoutes))
})

module.exports = aboutRouter
