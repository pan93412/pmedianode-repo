const app = require('express')
const log = require('../utils/log.js')
const config = require('../data/config.js')
const fs = require('fs')

// l10n
const sprintf = require('sprintf-js').sprintf
const loggingStr = require(`../data/strings/${config.lang}/logging.js`)
const pageStr = require(`../data/strings/${config.lang}/page.js`)

var indexRouter = app.Router()

const rawMediaData = fs.readFileSync('data/mediaList.json', {
  encoding: 'UTF-8'
})

const mediaData = JSON.parse(rawMediaData.toString()).reverse()

indexRouter.use(
  (req, res, next) => {
    if (config.verbose) log.info(sprintf(loggingStr.index_browsed, req.ip))
    next()
  }
)

indexRouter.get('/', (req, res) => {
  res.render('index', {
    brand: config.brand,
    userQuery: req.query.q,
    vidDat: mediaData,
    cardWidth: config.cardWidth,
    strings: pageStr
  })
})

module.exports = {
  index: indexRouter,
  about: require('./about.js'),
  announce: require('./announce.js'),
  search: require('./search.js'),
  player: require('./player.js')
}
