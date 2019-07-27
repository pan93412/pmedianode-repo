const app = require('express')
const mods = require('./mods.js')
const log = mods.log
const config = mods.conf
const fs = require('fs')

// l10n
const sprintf = mods.sprintf
const loggingStr = require(`../data/strings/${config.lang}/logging.js`)

var searchRouter = app.Router()

const rawMediaData = fs.readFileSync('data/mediaList.json', {
  encoding: 'UTF-8'
})

const mediaData = JSON.parse(rawMediaData.toString()).reverse()

searchRouter.use(
  (req, _, next) => {
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
  res.render('search', Object.assign({
    vidDat: mediaData,
    sprintf: sprintf // sprintf 模組, which is used to render '%s 的結果'
  }, mods.stdRoutes))
})

module.exports = searchRouter
