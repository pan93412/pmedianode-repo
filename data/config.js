// 相關設定

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
   * https 的 key 檔案位置
   *
   * @default ''
   * @format string
   */
  httpsKey: '',

  /**
   * https 的 cert 檔案位置
   *
   * @default ''
   * @format string
   */
  httpsCert: '',

  /**
   * 伺服器的 port
   *
   * @default 3000
   * @format int
   */
  servPort: 3000,

  /**
   * 是否啟用公告功能？
   * 注意：將此項設定成 false 以後，
   * navbar 仍然會出現「公告」。
   * 如果想完全隱藏「公告」，請將 data/navBarEntries.pug
   * 中 announce 的 hide 項設成 false。
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
