const conf = require('../data/config.js')
const stringPath = '../data/strings/'
const langMeta = require(stringPath)

/**
 * 自動選擇要使用的語言。
 *
 * @param {Array} cookieList Cookie 列表
 * @param {String} defaultLang 預設要使用的語言
 * @return {Object} 一個 require 結果產物。
 */
function getLang (cookieList, defaultLang) {
  const path = require('path')
  const usrLng = cookieList.userLang
  if (usrLng) {
    try {
      console.log(usrLng)
      return require(path.join(stringPath, `${usrLng}/page.js`))
    } catch (_) {}
  }
  console.log(defaultLang)
  return require(path.join(stringPath, `${defaultLang}/page.js`))
}

const toExport = {
  log: require('../utils/log.js'),
  conf: conf,
  sprintf: require('sprintf-js').sprintf,
  getLang: getLang,
  stdRoutes: {
    brand: conf.brand,
    cardWidth: '12.5em',
    langMeta: langMeta,
    enableAnnounce: conf.enableAnnounce
  }
}

module.exports = toExport
