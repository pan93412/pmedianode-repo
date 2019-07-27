const conf = require('../data/config.js')
const pageStr = require(`../data/strings/${conf.lang}/page.js`)

const toExport = {
  log: require('../utils/log.js'),
  conf: conf,
  sprintf: require('sprintf-js').sprintf,
  pageStr: pageStr,
  stdRoutes: {
    brand: conf.brand,
    cardWidth: conf.cardWidth,
    strings: pageStr
  }
}

module.exports = toExport
