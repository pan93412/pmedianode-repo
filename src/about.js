const brandLogo = require('./pMediaNodeLogo.svg')
const conf = require('../data/config.js')

/**
 * 將一個 ID 的 src 屬性設為指定值。
 *
 * @param {string} id, like '#brandLogo'
 * @param {string} value
 */
function specifyValue(id, value) {
  document.querySelector(id)
          .setAttribute('src', value)
}

specifyValue('#brandLogo', '/assets/' + brandLogo)

if (conf.showAuthors) {
  const utils = require('../utils')
  
  specifyValue('#pan93412-logo', utils.getGravatar('pan93412@gmail.com'))
  specifyValue('#hugwalk-logo', utils.getGravatar('baozou0421@gmail.com'))
  specifyValue('#U2FsdGVKX1-logo', utils.getGravatar('U2FsdGVKX1@gmail.com'))
}
