/**
 * pMediaNode API 的組態設定檔
 *
 * 請先複製一份 config.example.js 至 config.js
 * 後再修改 config.js。
 */

/**
 * 匯出設定供程式使用。
 *
 * 標籤一律以 @ 開頭，以下是標籤列表：
 * - `deprecated`: 表示已廢棄，可能會在下次次版號時
 *   正式移除。通常標籤後方會說明
 * - `advanced`: 表示供進階使用者變更。一般使用者
 *   無須理會此項。如果 `advanced` 項被標成 `deprecated`
 *   則直接移除整行即可。
 */
module.exports = {
  /** @advanced
   * 影片設定檔的存放位置。
   * 一般情況下維持預設值即可。
   *
   * 請參考 `config` 目錄下的 `README.md` 設定
   * `video.json`。
   */
  vidconf: 'video.json',

  /** @advanced
   * 公告設定檔的存放位置。
   * 一般情況下維持預設值即可。
   *
   * 請參考 `config` 目錄下的 `README.md` 設定
   * `announce.json`。
   */
  annoconf: 'announce.json',

  /** @advanced
   * pMediaNode 伺服器要開在的連線埠。
   *
   * 通常是 80。如果是 HTTPS 建議使用
   * Nginx 搭設反向代理。
   *
   * TODO: 未來可能也會寫個實驗性的
   * HTTPS 支援。
   */
  port: 80
}
