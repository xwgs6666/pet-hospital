var goodsList = [
  {
    goodsCode: 1,
    goodsName:'新宠入户体验爱犬',
    goodsPrice:152,
    goodsPic:'cloud://cloud-yxw-84i8k.636c-cloud-yxw-84i8k-1303001629/taocan/1.jpg',
    goodsDec:'体验服务',
  },
  {
    goodsCode: 2,
    goodsName:'新宠入户体验猫咪篇',
    goodsPrice:146,
    goodsPic:'cloud://cloud-yxw-84i8k.636c-cloud-yxw-84i8k-1303001629/taocan/2.jpg',
    goodsDec:'体验服务',
  },
  {
    goodsCode: 3,
    goodsName:'到店服务剪指甲服务',
    goodsPrice:176,
    goodsPic:'cloud://cloud-yxw-84i8k.636c-cloud-yxw-84i8k-1303001629/taocan/3.jpg',
    goodsDec:'贴心服务',
  },
  {
    goodsCode: 4,
    goodsName:'清理肛门腺服务',
    goodsPrice:166,
    goodsPic:'cloud://cloud-yxw-84i8k.636c-cloud-yxw-84i8k-1303001629/taocan/4.jpg',
    goodsDec:'贴心服务',
  },
  {
    goodsCode: 5,
    goodsName:'寄生虫检查体内外驱虫',
    goodsPrice:166,
    goodsPic:'cloud://cloud-yxw-84i8k.636c-cloud-yxw-84i8k-1303001629/taocan/5.jpg',
    goodsDec:'猫咪专用',
  },
  {
    goodsCode: 6,
    goodsName:'寄生虫检查体内外驱虫',
    goodsPrice:166,
    goodsPic:'cloud://cloud-yxw-84i8k.636c-cloud-yxw-84i8k-1303001629/taocan/6.jpg',
    goodsDec:'10kg一下狗狗使用',
  }
]
function getGoodsList(){
  return goodsList;
}
function getGoodsListByIndex(indexList){
  var goodsNewList=[];
  for(let i=0;i<indexList.length;i++){
    var index = indexList[i].index;
    var goods = goodsList[index];
    goodsNewList.push(goods); 
  }
  return goodsNewList;
}

module.exports = {
  getGoodsList: getGoodsList,
  getGoodsListByIndex:getGoodsListByIndex
}