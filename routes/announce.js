const app = require('express')
const log = require('../utils/log.js')
const config = require('../data/config.js')
const fs = require('fs')
var annoRouter = app.Router()

// l10n
const sprintf = require('sprintf-js').sprintf
const loggingStr = require(`../data/strings/${config.lang}/logging.js`)
const pageStr = require(`../data/strings/${config.lang}/page.js`)

const rawAnnoData = fs.readFileSync('data/announcements.json', {
  encoding: 'UTF-8'
})

const annoData = JSON.parse(rawAnnoData.toString()).reverse()

annoRouter.use(
  (req, res, next) => {
    if (config.verbose) log.info(sprintf(loggingStr.announce_browsed, req.ip))
    next()
  }
)

annoRouter.get('/announce', (req, res) => {
  res.render('announce', {
    brand: config.brand,
    userQuery: req.query.q,
    annoDat: annoData,
    cardWidth: config.cardWidth,
    strings: pageStr
  })
})

module.exports = annoRouter
