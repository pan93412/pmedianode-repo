const app = require('express')
const log = require('../utils/log.js')
const utils = require('../utils')
const config = require('../data/config.js')
const fs = require('fs')
const url = require('url')

// l10n
const sprintf = require('sprintf-js').sprintf
const loggingStr = require(`../data/strings/${config.lang}/logging.js`)
const pageStr = require(`../data/strings/${config.lang}/page.js`)

var playerRouter = app.Router()

const rawMediaData = fs.readFileSync('data/mediaList.json', {
  encoding: 'UTF-8'
})

const mediaData = JSON.parse(rawMediaData.toString()).reverse()

playerRouter.use(
  (req, res, next) => {
    if (config.verbose) log.info(sprintf(loggingStr.player_watched, req.ip, req.url))
    next()
  }
)

playerRouter.get('/player/:id', (req, res) => {
  const vidData = utils.getCurrentMediaData(mediaData, req.params.id)
  res.render('player', {
    brand: config.brand,
    userQuery: req.query.q,
    vidData: vidData,
    vidID: req.params.id,
    vidTags: utils.tagsParser(vidData.tags, true),
    cardWidth: config.cardWidth,
    url: url, // URL Module
    strings: pageStr
  })
})

module.exports = playerRouter
