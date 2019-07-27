const toExport = {
  log: require('../utils/log.js'),
  conf: require('../data/config.js'),
  sprintf: require('sprintf-js').sprintf,
  pageStr: require(`../data/strings/${this.conf.lang}/page.js`),
  stdRoutes: {
    brand: this.conf.brand,
    // eslint-disable-next-line no-undef
    userQuery: req.query.q,
    cardWidth: this.conf.cardWidth,
    strings: this.pageStr
  }
}

module.exports = toExport
