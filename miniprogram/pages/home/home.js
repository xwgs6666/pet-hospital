var goodsData = require("../../utils/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
  //   background: [
  //  '/images/7.jpg',
  //  '/images/8.jpg',
  //  '/images/9.jpg',
  //  '/images/10.jpg',
  //  '/images/11.jpg',
  //   ],
    goodsShowList:[
    
    ]
  },
  toCart:function(event){
    var index=event.currentTarget.dataset.id;
    var isCart=this.data.goodsShowList[index].isCart;
    if(!isCart){
      var oper = "goodsShowList[" + index +"].isCart";
      this.setData({
        [oper]:true
      })
      var cartList=wx.getStorageSync("cartList")||[];
      cartList.push({
        index:index,
        count:1
      });
      wx.setStorageSync("cartList", cartList);
    }
  },
  //收藏的方法
  toLove:function(event){
        //console.log(event);
        var index=event.currentTarget.dataset.id;
        var isLove=this.data.goodsShowList[index].isLove;
        var oper="goodsShowList["+index+"].isLove";
        this.setData({
          [oper]:!isLove
        })
        var loveList=wx.getStorageSync("loveList")||[];
        if(!isLove){
          loveList.push(index);
        }else{
          for(let i=0;i<loveList.length;i++){
            if(loveList[i]==index){
              loveList.splice(i,1);
            }
          }
        }
        wx.setStorageSync("loveList",loveList);
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var goodsList = goodsData.getGoodsList();
  var goodsShowList=[];
  var loveList=wx.getStorageSync("loveList")
  for (let i=0;i<goodsList.length;i++){
    goodsShowList.push(
      {
      detail:goodsList[i],
      isLove:false,
      isCart:false
      }
    )
  }
  //点了心心以后关闭再次打开仍然会显示
  for(let i=0;i<loveList.length;i++){
    var index=loveList[i];
    goodsShowList[index].isLove=true;
  }

  this.setData(
    {
      goodsShowList:goodsShowList
    }
  )
  }

  
})