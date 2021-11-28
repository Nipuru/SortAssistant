wx.cloud.init()
const db = wx.cloud.database()
Page({
    data: {
        isShow: false,
        results: [],
        TXAPI: {},
        src: "",
        isCamera: true,
        btnTxt: "拍照",
        type:["可回收物","有害垃圾","厨余垃圾","其他垃圾","无类别"]
    },
    onLoad() {
        var that=this
        this.ctx = wx.createCameraContext()
        db.collection('TXAPI').doc('38d78ca75ed4ac93001f0c60479145bd').get({
            success: function(res) {
                that.setData({TXAPI: res.data})
            },
            fail(error){
                console.error(error)
            }
        })
        wx.showShareMenu({
            withShareTicket: true //要求小程序返回分享目标信息
        })
    },
    takePhoto() {
        var that = this
        if (this.data.isCamera == false) {
            this.setData({
                isCamera: true,
                btnTxt: "拍照",
                isShow: false
            })
            return
        }
        this.ctx.takePhoto({
            quality: 'high',
            success: (res) => {
                this.setData({
                    src: res.tempImagePath,
                    isCamera: false,
                    btnTxt: "重拍"
                })
                wx.showLoading({
                    title: '正在加载中',
                })
                wx.getFileSystemManager().readFile({
                    filePath: res.tempImagePath,
                    encoding: "base64",
                    success: res => {
                        that.req(res.data)
                    },
                    fail: res => {
                        wx.hideLoading()
                        wx.showToast({
                            title: '拍照失败,未获取相机权限或其他原因',
                            icon: "none"
                        })
                    }
                })
            }
        })
    },
    req: function (image) {
        var that = this
        var TXAPI = this.data.TXAPI
        wx.request({
            url: TXAPI.TXAPI_BASE_URL + '/txapi/imglajifenlei/',
            method: 'post',
            header: {
                "content-type": "application/x-www-form-urlencoded",
            },
            data:{
                key: TXAPI.TXAPI_KEY,
                img: 'data:image/png;base64,' + image
            },
            success (res) {
                wx.hideLoading();
                if (res.data.code == 200) {
                console.log(res.data.newslist)
                var newSource = res.data.newslist
                that.setData({
                    results: newSource,
                    isShow: true
                })
                var query = wx.createSelectorQuery()
                query.select('.photo').boundingClientRect(rect=>{
                    var scroll = rect.height
                    wx.pageScrollTo({
                        scrollTop: scroll,
                        duration: 300
                    })
                }).exec()
                } else {
                    console.error('错误码：' + res.data.code + '\n错误提示：' + res.data.msg + '\n接口详情：https://www.tianapi.com/apiview/101')
                    wx.showToast({
                        icon: 'none',
                        title: '没有认出来，可以再试试~',
                    })
                }

            },
            fail(error){
                wx.hideLoading();
                console.log(error);
                wx.showToast({
                    icon: 'none',
                    title: '请求失败了，请确保网络正常，重新试试~',
                })
            }
        });
    },

    radioChange: function (e) {
        console.log(e)
        console.log(e.detail)
        console.log(e.detail.value)
        wx.navigateTo({
            url: '/pages/ai/search?searchText=' + e.detail.value,
        })
    },

    error(e) {
        console.log(e.detail)
    }

})