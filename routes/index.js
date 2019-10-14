const app = require('express')
const mods = require('./mods.js')
const config = mods.conf
const fs = require('fs')

var indexRouter = app.Router()

const mediaData = JSON.parse(
  fs.readFileSync('data/mediaList.json', { encoding: 'UTF-8' })
    .toString()
).reverse()

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
  player: require('./player.js'),
  options: require('./options.js'),
  broadcast: require('./broadcast.js')
}
