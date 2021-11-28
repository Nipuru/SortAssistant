// pages/sort/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    lobster:[
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quZBYx*gjZEEejCZMvyFXcKLQ2VA3AR5AaALybMK3sbgzv65krPTFS78X9kr4lZnbrg!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "整只龙虾",
        type: "厨余垃圾",
        color:"rgb(21, 117, 101)"
      },
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quSc2*78.cDROmHjY06LQ0MJA5Q4GMjyxBoISrSxGj.i*HNoeQLAn4l8JytgxZyw.5g!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "去黄龙虾头",
        type: "厨余垃圾",
        color:"rgb(21, 117, 101)"
      },
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3qufBRgFBTU6gFEc78sNw4tVfQE7y29fBLV.gIRpTHVTMzGcTVyMy*dNRvYF6p2eI2jA!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "龙虾壳",
        type: "厨余垃圾",
        color:"rgb(21, 117, 101)"
      },
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quXfHIkv6Y*eZ83EsPl40kK9SPg397u2TfDtaOryniZUYdmPYAzM3BmKqQ7rZxE29vA!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "龙虾肉",
        type: "厨余垃圾",
        color:"rgb(21, 117, 101)"
      },
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quXcWDoMIZulnv.hdaKieJqnhVrBlEWw.KdKtfvrvRI2rgFlsooZYPnD*EqAkUHynFA!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "龙虾黄",
        type: "厨余垃圾",
        color:"rgb(21, 117, 101)"
      }
    ],
    zongzi:[
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quS4Ty*B62q51u1b5f3AcBdzA512GdNeqycW0G3jAAlz4BKNwqwg4eLSQhx4e4*fvyA!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "整只粽子",
        type: "厨余垃圾",
        color:"rgb(21, 117, 101)"
      },
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quUsHutEna0Qpa6vmupYf1ZvRfwoDJGCCwXyRgMpDcVD3KLbH54xFF.WL3Vt2A1HyOA!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "粽子叶",
        type: "其他垃圾",
        color:"rgb(249, 168, 10)"
      },
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3qua70vzxwNNITQBXGQ7L0WJWiQ0KWgIkXyB249jxRHbUounHrIVdR2pyophEigZeUXg!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "粽子绳",
        type: "其他垃圾",
        color:"rgb(249, 168, 10)"
      },
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quX5CUhHJ3fmqxyrD01zAHNhyVHCTMZQbmlJSHYBvFAC5hJ12bGpC4.XtuVCLr3nvtw!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "粽子馅",
        type: "厨余垃圾",
        color:"rgb(21, 117, 101)"
      },
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3qucpjRFHJJrdwhay6dFAShfyBjVEg83Iq7scclXWgp.ESQboHrVo0Gt470oduWt.AbA!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "蛋黄",
        type: "厨余垃圾",
        color:"rgb(21, 117, 101)"
      }
    ],
    tea:[
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3qufI2Z9aJfV2E1PSLPAUYtcWWEEClA5KUFhMIuT6a0ll9Qk85YOtq9hDsb.woYSljcA!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "没喝完的奶茶",
        type: "倒掉",
        color:"black"
      },
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quatmdAehd5MD0z0.WlaEU0Gc2NpH4ZX4SfIXS8*uBiXFusJTKZn6WBs9ceVYnJu.Rw!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "奶茶杯",
        type: "其他垃圾",
        color:"rgb(249, 168, 10)"
      },
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quVAwjbxP76DNzR8IohmSvvelQ44uuset6tYINQ7atl2obuHUZkJ*IKGYDdFposH2HA!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "珍珠",
        type: "厨余垃圾",
        color:"rgb(21, 117, 101)"
      }
    ],
    takeout:[
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3que6fAdqUh41kdpoQiPwG8YyIvN42UBoD*MgEDZWLufSKwU3S93b3Pq1SJqE86iuYWQ!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "剩余的食物",
        type: "厨余垃圾",
        color:"rgb(21, 117, 101)"
      },
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quWKq9gPJSU3qpZflwg4zLrrpctRp1BqiZ8Qqu9yUodni7aHDJIqXE1otDSfkci4j6Q!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "快餐盒",
        type: "其他垃圾",
        color:"rgb(249, 168, 10)"
      },
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quSusfHD4qzWN1Se.vRH6Uf.7RJu7YWKYU69*GerlM4s8SYyM6AEMRAgmWufQROuyEA!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "外卖袋子",
        type: "其他垃圾",
        color:"rgb(249, 168, 10)"
      }
    ],
    cosmetics:[
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quQPPndPmNvBiX8Bpsvnn9l89uCndf4jTz96uRHxVZfocYN0OT.e0LW8sdQxPS4N95g!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "指甲油",
        type: "有害垃圾",
        color:"rgb(216, 30, 6)"
      },
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quUJmAz*RBdh6gUT30r33z.D1Lf2N3bn0Y.9ndfiA40jA3Kc*GGYd8cajWCFcr42ulg!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "口红",
        type: "其他垃圾",
        color:"rgb(249, 168, 10)"
      },
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quRzQ7Aw7LcldUYcwDS1NLlBSwMWANA.kjcM79EOyTSTL0Se1Yl6qlNFLEkePjFRpDQ!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "面霜瓶",
        type: "可回收物",
        color:"rgb(68, 107, 186)"
      }
    ],
    battery:[
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quZW1gcMk7qqmchXPECjqqN5*Dy30g2ZodWposcSSz3230Fa98yGcOJKx3RxIY9J0Nw!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "无汞干电池",
        type: "其他垃圾",
        color:"rgb(249, 168, 10)"
      },
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3qudj0WojTnwmdRHWJBnB7OOr7PcAs8hsQcKB6x1YlpdHihyZGZSO3Av7msI8JJJEr1Q!!/mnull&bo=yADIAAAAAAADByI!&rf=photolist&t=5",
        describe: "充电宝",
        type: "可回收物",
        color:"rgb(68, 107, 186)"
      },
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quT*AVqdDRDPOWvMwRzOESKHQihSv.o7Z7U3PzEjid91CueACCnVCkptW5pY*2jzSpQ!!/mnull&bo=DgHIAAAAAAADB.U!&rf=photolist&t=5",
        describe: "手机电池",
        type: "有害垃圾",
        color:"rgb(216, 30, 6)"
      },
      {
        img: "http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3qud0GyWTnTJekCpN3Uz.F2v7eX1pFgWGjn4aJMKlleMcnCGGKnvX6650Me1mSpI*LMA!!/mnull&bo=eAHIAAAAAAADB5M!&rf=photolist&t=5",
        describe: "蓄电池",
        type: "有害垃圾",
        color:"rgb(216, 30, 6)"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.type)
    this.setData({type:options.type})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})


