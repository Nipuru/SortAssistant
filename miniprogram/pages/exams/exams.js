// pages/exams/exams.js
const PostData = require('../../utils/ques.js')
function spawner() {
  console.log(PostData.ques[3].data.length)
  var n=10
  var type=[],index=[],list=[]
  for(var i=0;i<n;i++){
    var num=Math.floor(Math.random() * (3 + 1));
    type.push(num);
  }
  for(var i=0;i<n;i++){
    var max=PostData.ques[type[i]].data.length-1
    var num=Math.floor(Math.random() * (max + 1));
    index.push(num);
  }
  console.log(type)
  console.log(index)
  for(var i=0;i<n;i++){
    list[i]={
      describe: PostData.ques[type[i]].data[index[i]],
      answer: type[i],
      chose: 4
    }
  }
  console.log(list)
  return list;
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    options:["厨余垃圾","可回收物","其他垃圾","有害垃圾","未选择"],
    score:0,
    isShow: false,
    cur:0
  },

  onChose: function (e) {
    var list = this.data.list                     //获取题目序列
    var score = this.data.score                   //获取分数
    var title = e.currentTarget.dataset.title     //获取题目序号
    var chose = e.currentTarget.dataset.chose     //获取选项
    var points = 0                                //设置加分为0
    list[title].chose = chose                     //将选项存入到数组
    if(list[title].answer==list[title].chose){    //判断答案和选项是否相等
      points = 100/(list.length)                  //设置加分为100除以题目个数
    }
    console.log("|正确答案："+list[title].answer+"|选择了："+list[title].chose+"|增加了："+points+"分|")
    var that = this
    setTimeout(
      function() {
        that.setData({
          list:list,
          cur:title+1,                                //题序加一
          score:score+points                          //增加分数
        })     
    },500)
    
  },

  onRestart: function () {
    var list = spawner()
    this.setData({
      list: list,
      score: 0,
      cur:0
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    var list = spawner()
    this.setData({
      list: list,
      isShow: true
    })                        //将list传递到data
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