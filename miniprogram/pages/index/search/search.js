const searchGarbage = require('../../../utils/garbage-search.js');
Page(
    {
    data: {
      datas:[],
      searchText:"",
        noResult:"没有查到结果，换个词试试奥~",
      logo:"",
  },

  onLoad: function (options) {
      if(options.searchText){
          this.setData({
              searchText:options.searchText
          });
        this.onGetData(options.searchText);
      }
  },
  searchIcon:function(e){
      console.log('search:'+e);
      if(!e.detail.value){
        return ;
      }
      this.setData({
          searchText:e.detail.value
      });
    console.log("====="+e.detail.value)
    this.onGetData(this.data.searchText)
  },
  onGetData:function(text){
    var that=this
    var searchResult = new Array();

     searchGarbage.search(text, function success(res){
       console.log('searchResult:'+res);
         searchResult = res;
         that.setData({
             datas:searchResult
         })
     });
  }  
})