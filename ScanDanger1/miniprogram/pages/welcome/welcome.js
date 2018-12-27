Page({
    onTapJump: function (event) {
      wx.redirectTo({
            url: "../index/index",
            success: function () {
                console.log("jump success")
            },
            fail: function () {
                console.log("jump failed")
            },
            complete: function () {
                console.log("jump complete")
            }
        });
    },
  onTapJumpOne: function (event) {
    wx.redirectTo({
      url: "../indexOne/indexOne",
      success: function () {
        console.log("jump success")
      },
      fail: function () {
        console.log("jump failed")
      },
      complete: function () {
        console.log("jump complete")
      }
    });
  },
  onTapJumpTwo: function (event) {
    wx.redirectTo({
      url: "../indexTwo/indexTwo",
      success: function () {
        console.log("jump success")
      },
      fail: function () {
        console.log("jump failed")
      },
      complete: function () {
        console.log("jump complete")
      }
    });
  },
    onUnload: function (event) {
        console.log("page is unload")
    },
    onHide: function (event) {
        console.log("page is hide")
    },
})