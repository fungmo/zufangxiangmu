//房合同表
const mongoose = require('mongoose');  

// 需要在使用mongoose.Schema 对于这个表的对应指定进行声明
const houseContractSchema = mongoose.Schema({
    owner:String,  //甲方
    renter:String, //乙方
    Ophone:String, //甲方电话
    Rphone:String, //乙方电话
    OidNum:String, //甲方身份证
    RidNum:String, //乙方身份证
    houseInfo:String,  //房源信息
    houseType:Number,  //房屋类型 1.住宅 2.别墅 3.写字楼 4.商铺
    rent:Number,  //房租
    HouseWay:Number, //出租方式 1合租 2转租 3自有
    address:String,  //地址 
    floorSpace:String,  //面积
    householdType:String,  //户型
    floor:Number,  //楼层
},{
    timestamps:true // 设置为true会自动的帮我们添加及维护两个字段 createdAt  updatedAt
})
const houseContract = mongoose.model('houseContract',houseContractSchema)

module.exports = houseContract