require('bootstrap') // Bootstrap JS
const utils = require('../utils/index.webpack.js') // Utils
const Cookie = require('js-cookie') // JS Cookie

// 建立 click 活動
for (const langTags of document.querySelectorAll('.dropdown-menu > .changeLang')) {
  langTags.addEventListener('click', function () {
    Cookie.set('userLang', this.dataset.lang, {
      expires: 1
    })
    location.reload()
  })
}

/**
 * 嵌入 iconData 圖示至 elementId
 * @param {string} elementId 元素 ID
 * @param {Object} iconData 圖示 ID
 */
function embedIcons (elementId, iconData) {
  document.querySelector('#' + elementId)
    .append(iconData.toSvg())
}

embedIcons()
