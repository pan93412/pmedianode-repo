require('bootstrap') // Bootstrap JS
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
