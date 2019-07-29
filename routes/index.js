const app = require('express')
const mods = require('./mods.js')
const log = mods.log
const config = mods.conf
const fs = require('fs')

// l10n
const sprintf = mods.sprintf
const loggingStr = require(`../data/strings/${config.lang}/logging.js`)

var indexRouter = app.Router()

const rawMediaData = fs.readFileSync('data/mediaList.json', {
  encoding: 'UTF-8'
})

const mediaData = JSON.parse(rawMediaData.toString()).reverse()

indexRouter.use(
  (req, _, next) => {
    if (config.verbose) log.info(sprintf(loggingStr.index_browsed, req.ip))
    next()
  }
)

indexRouter.get('/', (req, res) => {
  res.render('index', Object.assign({
    userQuery: req.query.q,
    vidDat: mediaData,
    strings: mods.getLang(req.cookies, config.lang)
  }, mods.stdRoutes))
})

module.exports = {
  index: indexRouter,
  about: require('./about.js'),
  announce: require('./announce.js'),
  search: require('./search.js'),
  player: require('./player.js')
}
