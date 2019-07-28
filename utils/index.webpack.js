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

module.exports = {
  getGravatar: getGravatar
}
