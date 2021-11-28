
var garbage_data = require('./garbage-sort-data.js');
var sorts = [
    {
        color: "#014782",
        bgcolor: "#E3F3F3",
        logo: "/images/index/RecycleableWaste.jpg",
        name: "可回收物",
        content: "可以再生循环的垃圾，本身或材质可再利用的纸类、硬纸板、玻璃、塑料、金属、塑料包装，",
        desc: "废纸、塑料、玻璃、金属和纺织物五大类生活垃圾，有害垃圾、电子/电器垃圾和电池三类特殊危害垃圾以及废弃家具类垃圾。",
        action: ["轻投轻放", "清洁干燥，避免污染", "废纸尽量平整", "立体包装物请清空内容物，清洁后压扁投放","有尖锐边角的，应包裹后投放"],
    },
    {
        color: "#D81E06",
        bgcolor: "#F0F0F0",
        logo: "/images/index/HazardouAwaste.jpg",
        name: "有害垃圾",
        content: "废电池、废灯管、废药品、废油漆及其容器等对人体健康或者自然环境造成直接或者潜在危害的生活废弃物。",
        desc: "废电池、废日光灯管、废水银温度计、过期药品等",
        action: ["投放时请注意轻放", "易破损的请连带包装或包裹后轻放","杀虫剂等压力罐装容器，应排空内容物后投放"],
    }, 
    {
    color:"#00853E",
    bgcolor: "#E3F3F3",
    logo:"/images/index/HouseholdfoodWaste.jpg",
    name:"厨余垃圾",
    content: "指居民日常生活及食品加工、饮食服务、单位供餐等活动中产生的垃圾",
    desc: "丢弃不用的菜叶、剩菜、剩饭、果皮、蛋壳、茶渣、骨头等",
    action: ["纯流质的食物垃圾，如牛奶等，应直接倒进下水口","有包装物的湿垃圾应将包装物去除后分类投放，包装物请投放到对应的可回收物或干垃圾容器"],
},{
    color: "#6A6762",
    bgcolor: "#F0F0F0",
    logo: "/images/index/ResidualWaste.jpg",
    name: "其他垃圾",
    content: "危害比较少，并且没有再次利用的价值的垃圾",
    desc: "砖瓦陶瓷、渣土、卫生间废纸、瓷器碎片、贝壳、花盆等",
    action: ["尽量沥干水分，难以辨识类别的生活垃圾投入干垃圾容器内"],

}];

function init(categroy, that, callback) {
  if (categroy <= 0){
    return false;
  }
  var temData = that.data.wxaSortPickerData;
  if(typeof temData == 'undefined'){
      temData = {};
  }
  that.wxaSortPickerUpper = wxaSortPickerUpper;
  that.wxaSortPickerLower = wxaSortPickerLower;
  that.wxaSortPickerScroll = wxaSortPickerScroll;
  that.wxaSortPickerTemTagTap = wxaSortPickerTemTagTap;
  setViewWH(that);

  buildTextData(that,categroy);
}

function buildTextData(that,categroy){

  //读取某类垃圾数据
var textData = {};
    var  garbage_sort_data = garbage_data.garbage_sort_data;
    garbage_sort_data.forEach(function (item){
        if(item.categroy ===categroy){
            textData = item.data ;
        }
    })

   // console.log("textData:"+JSON.stringify(textData)) ;
    var temData = that.data.wxaSortPickerData;
    if(typeof temData == 'undefined'){
            temData = {};
    }
    temData.textData = textData;
    that.setData({
        wxaSortPickerData: temData
    });

    that.setData({
        sort: sorts[categroy-1]
    });

   // console.log(that.data.wxaSortPickerData);
    //console.log('sort:'+JSON.stringify(that.data.sort));

}

function wxaSortPickerUpper(e) {
    //console.dir(e);
}

function wxaSortPickerLower(e) {
    //console.dir(e);
}

function wxaSortPickerScroll(e) {
    //console.log(e.detail.scrollTop);
}

function setViewWH(that) {
    wx.getSystemInfo({
        success: function (res) {
            // console.dir(res);
            var windowWidth = res.windowWidth;
            var windowHeight = res.windowHeight;
            var temData = that.data.wxaSortPickerData;
            if(typeof temData == 'undefined'){
                temData = {};
            }
            var view = {};
            view.scrollHeight = windowHeight;
            temData.view = view;
            that.setData({
                wxaSortPickerData: temData
            })
        }
    })
}

function wxaSortPickerTemTagTap(e) {
    var that = this;
    var temData = that.data.wxaSortPickerData;
    temData.wxaSortPickertoView = e.target.dataset.tag;
    //console.log(temData)
    that.setData({
        wxaSortPickerData: temData
    });
}

module.exports = {
    init: init
}