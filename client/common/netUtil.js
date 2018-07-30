const netUtils = {
  request (obj) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: obj.url,
        data: obj.url,
        method: obj.method || 'GET',
        success (e) {
          console.log('%c request success: ','color: green; font-size: 25px;')
          console.log('success => \n',e)
          resolve(e)
        },
        fail (e) {
          console.log('%c request fail: ', 'color: red;font-size: 25px;')
          console.log('fail => \n',e)
          reject(e)
        }
      })
    })

  }
}

module.exports = netUtils