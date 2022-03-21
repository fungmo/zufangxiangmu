//房源数据表
const mongoose = require('mongoose');  

// 需要在使用mongoose.Schema 对于这个表的对应指定进行声明
const houseSchema =mongoose.Schema({
    houseType:Number,  //房屋类型 1.公寓 2.城中村 3.名宿
    householdType:String,  //户型  几房几厅
    housePeople:Number,  //宜住几人
    houseGPS:{type:String, default:''},  //定位  经度  纬度   default 默认值
    houseTime:Number,  //居住类型 长租 短租 游玩 转租
    Type:Number, //整租，合租
    houseaddr:String,//房屋地址
   landlordId:mongoose.Types.ObjectId,//房东id
    houseCate:String,//房产证 或合同
    status:Number,//审核状态 
    houseInfo:String,  //房源标题
    houseFacility:mongoose.Types.ObjectId, //配套设施  绑定配套设施表
    huoseLimit:Number, //接待要求 ：允许聚会...
    ownerLimit:Number, //房东要求
    metroYX:Number, //地铁沿线
    
    housePicture:String, //房屋图片路径
    houseVideo:String,  //房屋视频
    housePrice:Number, //房屋价格
    houseReducedPrice:Number, //房屋优惠价格
    
   
},{
    timestamps:true // 设置为true会自动的帮我们添加及维护两个字段 createdAt  updatedAt
})
const houseData = mongoose.model('houseData',houseSchema)

module.exports = houseData