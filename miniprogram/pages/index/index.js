//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    topImages: [
      {url: "/images/index/topImage1.jpg"},
      {url: "/images/index/topImage2.jpg"},
      {url: "/images/index/topImage3.jpg"}
    ],
    msgList: [
      {title: "垃圾要分类，生活变完美"},
      {title: "分类有道，垃圾成宝" },
      {title: "垃圾分类举手之劳，循环利用变废为宝" },
      {title: "保护环境，持续发展" }
    ],
    sortImages: [
      {
        url: "/images/index/RecycleableWaste.jpg",
        type: "可回收物"
      },
      {
        url: "/images/index/HazardouAwaste.jpg",
        type: "有害垃圾"
      },
      {
        url: "/images/index/HouseholdfoodWaste.jpg",
        type: "厨余垃圾"
      },
      {
        url: "/images/index/ResidualWaste.jpg",
        type: "其他垃圾"
      }
    ],
    ColorList: [
      {
        name:"小龙虾",
        content:"夏日限定",
        url:'http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quTA3gOLK3JUyBJpx8wZi6c7XWbJ*IpQSYlyvb9ZsJATbKZghoeCyUkHdAKmOzUlIiA!!/mnull&bo=PgA.AAAAAAADByI!&rf=photolist&t=5'
      },

      {
        name:"端午节",
        content:"端午限定",
        url:'http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3qudI9gz8p01gyL27z7lIlXpM10SlTnPtToB7t4BR51yzQOs0P2Dfj.zrm1bR5GHGUgA!!/mnull&bo=PgA.AAAAAAADByI!&rf=photolist&t=5'
      },

      {
        name:"奶茶类",
        content:"肥宅快乐",
        url:'http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quR5qRJj3kCXHTwfGQr3pOdEpT37qBLLhwNtn4n2FENvw4yXYH.t0i02ixg0siVqijQ!!/mnull&bo=fAB8AAAAAAADByI!&rf=photolist&t=5'
      },
      
      {
        name:"外卖类",
        content:"外卖一族",
        url:'http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3qudpAil0ikc9tMLhSxfnJbdRn2zLdWqfA88nQYiLMMb7d.0I6lcWj.OECZadGXb4kGA!!/mnull&bo=fAB8AAAAAAADByI!&rf=photolist&t=5'
      },

      {
        name:"化妆品",
        content:"靓女必备",
        url:'http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3qufqEErxG*WJU2jZMMh5R2JlbwqvEYAKFhsQJjr3L7bQI2z1nWVEmGlmY*aKCiXSKRw!!/mnull&bo=PgA.AAAAAAADByI!&rf=photolist&t=5'
      },

      {
        name:"电池类",
        content:"居家必备",
        url:'http://m.qpic.cn/psc?/V141D8FR3lmNoW/f*DO5817LGdZi.ytwQ3quTsos9euhKECeNpwm19mQpvVof2bSe4BIIX0qVTXhSRMECRF8tCLuDzJyhZqCJhrDQ!!/mnull&bo=PgA.AAAAAAADByI!&rf=photolist&t=5'
      }
      
    ]
  },

  //事件处理函数
  choseType: function (e) {
    var index=e.currentTarget.dataset.index
    wx:wx.navigateTo({
      url: '/pages/index/detail/index?type=' + (index+1)
    })
  },
  goSearch: function () {
    wx:wx.navigateTo({
      url: '/pages/index/search/search'
    })
  },
  goExams: function () {
    wx.navigateTo({
      url: '/pages/exams/exams'
    })
  },
  goCamera: function () {
    wx:wx.navigateTo({
      url: '/pages/index/camera/camera'
    })
  },

  onClick:function(e){
    // console.log(JSON.stringify(e))
     var type = e.currentTarget.dataset.type
     wx.navigateTo({
         url: '../specials/sort/index?type=' + (type+1),
  
     })
   },

  onLoad: function () {

  }
})
