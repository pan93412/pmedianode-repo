const app = require('express')
const mods = require('./mods.js')
const log = mods.log
const config = mods.conf

// l10n
const sprintf = mods.sprintf
const loggingStr = require(`../data/strings/${config.lang}/logging.js`)

var optionsRouter = app.Router()

optionsRouter.use(
  (req, _, next) => {
    if (config.verbose) log.info(sprintf(loggingStr.options_browsed, req.ip))
    next()
  }
)

optionsRouter.get('/options', (req, res) => {
  res.render('options', Object.assign({
    userQuery: req.query.q,
    strings: mods.getLang(req.cookies, config.lang)
  }, mods.stdRoutes))
})

module.exports = optionsRouter
