const assert = require('assert')
const utils = require('../utils')
// const utilsWebpack = require('./utils/index.webpack.js')

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
    assert(utils.getCurrentMediaData(
      tests.full,
      'awwwwww'
    ) == null)
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
describe('檢查 utils - taglist', function () {

})
