// miniprogram/pages/cartList/cartList.js
var showData=require("../../utils/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
  goodsCartList:[],
  allTotal:0
  },
  //处理+和-操作
oper:function(event){
    var isDelete=false;
     console.log(event);
     var index=event.currentTarget.dataset.index;
     var count=this.data.goodsCartList[index].count;
     var temp = "goodsCartList[" + index + "].count";
     if(event.currentTarget.dataset.type=='+'){
       this.setData({
         [temp]:++count
       })
     }else{
        if(count>1){
          this.setData({
            [temp]:--count
          })
        }else{
          isDelete=true;//用于标记该商品需要被删除
        }
     }
     var that=this;
     var cartList=wx.getStorageSync("cartList");
     if(isDelete){
     wx.showModal({
       title:'提示',
       content:'您是否要将该订单移除出我的订单中',
       success:function(res){
         if(res.confirm){
         var newCartel=[];
         for(let i=0;i<cartList.length;i++){
           if(i!=index){
             newCartel.push(cartList[i]);
           }
         }
         wx.setStorageSync("cartList",newCartel);
         that.getNewPage();
         }
       }
     })
     }else{
      cartList[index].count=count;
      wx.setStorageSync("cartList",cartList);
     }
     //cartList[index].count=count;
     var allTotal=0;
     var goodsCartList = this.data.goodsCartList;
     for(let i=0;i<goodsCartList.length;i++){
       allTotal += goodsCartList[i].detail.goodsPrice * goodsCartList[i].count;
     }
     this.setData({
       allTotal:allTotal
     })


},
  getNewPage:function(){
    var cartIndexList=wx.getStorageSync("cartList");
    var cartList=showData.getGoodsListByIndex(cartIndexList);
    var goodsCartList=[];
    var allTotal=0;
    for(let i=0;i<cartList.length;i++){
      goodsCartList.push({
        detail:cartList[i],
        count:cartIndexList[i].count
      })
      allTotal = allTotal + cartList[i].goodsPrice*cartIndexList[i].count;
    }
    this.setData({
      goodsCartList:goodsCartList,
      allTotal:allTotal
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  this.getNewPage();
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