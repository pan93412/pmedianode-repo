// 相關設定
// 用來載入檔案的函式。
// eslint-disable-next-line no-unused-vars
const loadFile = require('../utils').loadFile

module.exports = {
  /**
   * 此實體的名稱。
   *
   * @default pMediaNode
   * @format string
   */
  brand: 'pMediaNode',

  /**
   * 是否使用 https？
   *
   * 如果要使用其他伺服器反向代理，請
   * 將此項設定成 false。如果要直接使用此
   * 伺服器，請將此項設定成 true。
   *
   * @default false
   * @format bool
   */
  isHttps: false,

  /**
   * https 伺服器的詳細設定
   *
   * @format Object
   */
  httpsOptions: {
    // https 伺服器的 key，請使用 loadFile('key 檔名') 來載入 key。
    // ex. key: loadFile('~/key')
    key: '',
    // https 伺服器的 cert，請使用 loadFile('cert 檔名') 來載入 cert。
    // ex. cert: loadFile('~/cert')
    cert: ''
  },

  /**
   * 伺服器的 port
   *
   * @default 3000
   * @format int
   */
  servPort: 3000,

  /**
   * 是否啟用公告功能？
   *
   * @default true
   * @format bool
   */
  enableAnnounce: true,

  /**
   * 是否在關於頁面顯示作者群
   * （我自己是建議不用開，
   * 能省下開啟關於頁面的時間）
   *
   * @default false
   * @format bool
   */
  showAuthors: false,

  /**
   * 是否顯示更詳細的瀏覽訊息？
   *
   * @default false
   * @format bool
   */
  verbose: false,

  /**
   * pMedia 的語言
   *
   * @default zh_TW
   * @format string
   */
  lang: 'zh_TW'
}
