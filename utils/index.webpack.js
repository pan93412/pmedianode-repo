/**
 * 取得一位使用者的 Gravatar 頭貼。
 *
 * @param {string} 使用者 E-mail
 * @return {string} 頭貼位址
 */
function getGravatar (email) {
  const md5 = require('blueimp-md5') // 需要時才載入。
  return 'https://www.gravatar.com/avatar/' + md5(email.toLowerCase()) + '?s=160'
}

/**
 * 取得 GitHub Octicons 的某張圖示中介資訊。
 *
 * @param {string} id 圖示 ID。
 * 請到 https://octicons.github.com/ 查圖示。
 * @return {Object} 該 Octicons 圖示的中介資訊。
 * 使用 toSvg() 嵌入網頁。
 */
function getOpticons (id) {
  const oicon = require('octicons')

  return oicon[id]
}

module.exports = {
  getGravatar: getGravatar,
  getOpticons: getOpticons
}
