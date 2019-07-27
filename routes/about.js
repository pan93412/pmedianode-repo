const app = require('express')
const mods = require('./mods.js')
const log = mods.log
const config = mods.conf

// l10n
const sprintf = mods.sprintf
const loggingStr = require(`../data/strings/${config.lang}/logging.js`)

var aboutRouter = app.Router()

aboutRouter.use(
  (req, _, next) => {
    if (config.verbose) log.info(sprintf(loggingStr.about_browsed, req.ip))
    next()
  }
)

aboutRouter.get('/about', (req, res) => {
  res.render('about', Object.assign({
    showAuthors: config.showAuthors
  }, mods.stdRoutes))
})

module.exports = aboutRouter
