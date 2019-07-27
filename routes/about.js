const app = require('express')
const log = require('../utils/log.js')
const config = require('../data/config.js')

// l10n
const sprintf = require('sprintf-js').sprintf
const loggingStr = require(`../data/strings/${config.lang}/logging.js`)
const pageStr = require(`../data/strings/${config.lang}/page.js`)

var aboutRouter = app.Router()

aboutRouter.use(
  (req, _, next) => {
    if (config.verbose) log.info(sprintf(loggingStr.about_browsed, req.ip))
    next()
  }
)

aboutRouter.get('/about', (req, res) => {
  res.render('about', {
    brand: config.brand,
    userQuery: req.query.q,
    showAuthors: config.showAuthors,
    strings: pageStr
  })
})

module.exports = aboutRouter
