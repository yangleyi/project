const Net = require('../../common/netUtil')
Page({
  data: {
    
  },
  onLoad (e) {
    console.log('index page onload =>',e)
    this.net()
  },

  net () {
    let obj = {
      data: 'haha',
      method: 'POST',
      url: 'http://localhost:8000',
    }
    Net.request(obj)
  },

  onShow (e) {
    console.log('index page onshow => ',e)
  }
})