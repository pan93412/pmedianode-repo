const app = require('express')
const mods = require('./mods.js')
const log = mods.log
const config = mods.conf
const fs = require('fs')
var annoRouter = app.Router()

// l10n
const sprintf = mods.sprintf
const loggingStr = require(`../data/strings/${config.lang}/logging.js`)

const rawAnnoData = fs.readFileSync('data/announcements.json', {
  encoding: 'UTF-8'
})

const annoData = JSON.parse(rawAnnoData.toString()).reverse()

annoRouter.use(
  (req, _, next) => {
    if (config.verbose) log.info(sprintf(loggingStr.announce_browsed, req.ip))
    next()
  }
)

annoRouter.get('/announce', (req, res) => {
  res.render('announce', Object.assign({
    userQuery: req.query.q,
    annoDat: annoData
  }, mods.stdRoutes)
  )
})

module.exports = annoRouter
