module.exports = {
  // entry (或稱 chunk)
  entries: {
    cssInc: './src/css/include.js',
    jsInc: './src/js/include.js'
  },
  defaultEntries: [
    'cssInc', 'jsInc'
  ],
  // chunks 不必，也不要引入預設引入的項目。
  // 如果沒有須引入的 chunks，就不要加這項。
  pages: [
    // // 首頁
    // {
    //   page: 'index'
    // },
  ]
}
