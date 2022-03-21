//房子推广 collection
const mongoose = require('mongoose')

// 需要在使用mongoose.Schema 对于这个表的对应指定进行声明
var housePopularizeSchema = mongoose.Schema({
    houseDataId:String,//房源ID
    comments:Array,//评论Id
    landlordId:String,//房东id
    houseType:Number,  //房屋类型 1.短租 2.长租 
    houseaddr:String,//房屋地址
    housePicture:String, //房屋图片路径
    houseVideo:String,  //房屋视频
    housePrice:Number, //房屋价格
    houseInfo:String,  //房源标题
    houseContent:String,  //房源介绍内容
}, {
    timestamps: true // 设置为true会自动的帮我们添加及维护两个字段 createdAt  updatedAt
})
var popularize = mongoose.model('housePopularize', housePopularizeSchema)

module.exports = popularize