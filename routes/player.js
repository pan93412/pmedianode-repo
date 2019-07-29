const app = require('express')
const mods = require('./mods.js')
const utils = require('../utils')
const log = mods.log
const config = mods.conf
const fs = require('fs')
const url = require('url')

// l10n
const sprintf = mods.sprintf
const loggingStr = require(`../data/strings/${config.lang}/logging.js`)

var playerRouter = app.Router()

const rawMediaData = fs.readFileSync('data/mediaList.json', {
  encoding: 'UTF-8'
})

const mediaData = JSON.parse(rawMediaData.toString()).reverse()

playerRouter.use(
  (req, _, next) => {
    if (config.verbose) log.info(sprintf(loggingStr.player_watched, req.ip, req.url))
    next()
  }
)

playerRouter.get('/player/:id', (req, res) => {
  const vidData = utils.getCurrentMediaData(mediaData, req.params.id)
  res.render('player', Object.assign({
    userQuery: req.query.q,
    vidData: vidData,
    vidID: req.params.id,
    vidTags: utils.tagsParser(vidData.tags, true),
    strings: mods.getLang(req.cookies, config.lang),
    url: url // URL Module, which is used to fix m3u8 issues.
  }, mods.stdRoutes))
})

module.exports = playerRouter
