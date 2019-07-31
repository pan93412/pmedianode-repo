const assert = require('assert')
const utils = require('../utils')
const utilsWebpack = require('../utils/index.webpack.js')

// eslint-disable-next-line no-undef
describe('檢查 utils - getCurrentMediaData', function () {
  const tests = {
    full: [
      {
        id: 'test1',
        url: 'data/media/test1.mp3',
        title: 'TEST 1',
        desc: 'TEST1!!!',
        author: 'pan93412',
        tags: ['Test', 'test']
      },
      {
        id: 'test2',
        url: 'data/media/test22222222.mp3',
        title: 'TEST 2',
        desc: 'TEST2222222!!!',
        author: 'pan93412',
        tags: ['Test', 'test']
      },
      {
        id: 'test1',
        url: 'data/media/test3.mp3',
        title: 'TEST 3',
        desc: 'TEST3!!!',
        author: 'pan93412',
        tags: ['Test', 'test']
      }
    ],
    expection1: {
      id: 'test1',
      url: 'data/media/test1.mp3',
      title: 'TEST 1',
      desc: 'TEST1!!!',
      author: 'pan93412',
      tags: ['Test', 'test']
    },
    expection2: {
      id: 'test2',
      url: 'data/media/test22222222.mp3',
      title: 'TEST 2',
      desc: 'TEST2222222!!!',
      author: 'pan93412',
      tags: ['Test', 'test']
    }
  }

  // eslint-disable-next-line no-undef
  it('在請求指定 ID 時，是否正確回傳指定中介資料', function () {
    assert.deepStrictEqual(utils.getCurrentMediaData(
      tests.full,
      'test2'
    ), tests.expection2)
  })

  // eslint-disable-next-line no-undef
  it('若請求不存在的 ID 時，是否回傳 undefined', function () {
    assert.ifError(utils.getCurrentMediaData(
      tests.full,
      'awwwwww'
    ))
  })

  // eslint-disable-next-line no-undef
  it('若請求有重複項的 ID 時，是否回傳第一個符合項', function () {
    assert.deepStrictEqual(utils.getCurrentMediaData(
      tests.full,
      'test1'
    ), tests.expection1)
  })
})

// eslint-disable-next-line no-undef
describe('檢查 utils - tagsParser', function () {
  const test = ['hi', 'i', 'am', 'unit', 'test']

  // eslint-disable-next-line no-undef
  it('在 delimiter 與 isCode 都是預設值時，是否輸出正確？', function () {
    assert.deepStrictEqual(utils.tagsParser(test), 'hi, i, am, unit, test')
  })

  // eslint-disable-next-line no-undef
  it('在 delimiter 是預設值，isCode 是 true 時，是否輸出正確？', function () {
    assert.deepStrictEqual(utils.tagsParser(test, true), '<code>hi, i, am, unit, test</code>')
  })

  // eslint-disable-next-line no-undef
  it('在 isCode 是預設值，delimiter 是「、」時，是否輸出正確？', function () {
    assert.deepStrictEqual(utils.tagsParser(test, false, '、'), 'hi、i、am、unit、test')
  })

  // eslint-disable-next-line no-undef
  it('在 isCode 是 true，delimiter 是「、」時，是否輸出正確？', function () {
    assert.deepStrictEqual(utils.tagsParser(test, true, '、'), '<code>hi、i、am、unit、test</code>')
  })
})

// eslint-disable-next-line no-undef
describe('檢查 utils - loadFile', function () {
  // eslint-disable-next-line no-undef
  it('在檔案不存在時，是否正確拋出錯誤？', function () {
    try {
      utils.loadFile('test/abcdefghijklmnopqrstuvwxyzwwwwwwwwwwwwwwww.abccccccccccc')
    } catch (_) {
      assert.ok(true)
    }
  })

  // eslint-disable-next-line no-undef
  it('在檔案存在時，是否正確輸出內容？', function () {
    assert.deepStrictEqual(
      utils.loadFile('test/testFile.txt').toString(),
      'Hello! This is a test file. Don\'t move, delete or even modify it, otherwise Unit Test would be failed. '
    )
  })
})

// eslint-disable-next-line no-undef
describe('檢查 utils - getGravatar', function () {
  // eslint-disable-next-line no-undef
  it('是否產生正確 Gravatar 頭貼位置', function () {
    assert.deepStrictEqual(
      utilsWebpack.getGravatar('pan93412@localhost'),
      'https://www.gravatar.com/avatar/4bfb0c8cabc29a845112d63df1ce5290?s=160'
    )
  })
})
