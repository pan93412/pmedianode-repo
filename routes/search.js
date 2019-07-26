const app = require('express')
const log = require('../utils/log.js')
const config = require('../data/config.js')
const fs = require('fs')

// l10n
const sprintf = require('sprintf-js').sprintf
const loggingStr = require(`../data/strings/${config.lang}/logging.js`)
const pageStr = require(`../data/strings/${config.lang}/page.js`)

var searchRouter = app.Router()

const rawMediaData = fs.readFileSync('data/mediaList.json', {
  encoding: 'UTF-8'
})

const mediaData = JSON.parse(rawMediaData.toString()).reverse()

searchRouter.use(
  (req, res, next) => {
    if (config.verbose) {
      log.info(sprintf(
        loggingStr.search_template,
        req.ip,
        req.query.q == null ? loggingStr.search_action_searchedNothing : sprintf(
          loggingStr.search_action_searchedSomething,
          req.query.q
        )
      ))
    }
    next()
  }
)

searchRouter.get('/search', (req, res) => {
  res.render('search', {
    brand: config.brand,
    userQuery: req.query.q,
    vidDat: mediaData,
    cardWidth: config.cardWidth,
    strings: pageStr,
    sprintf: sprintf // sprintf 模組
  })
})

module.exports = searchRouter
