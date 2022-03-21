//订单 collection
const mongoose =require('mongoose')
// 需要在使用mongoose.Schema 对于这个表的对应指定进行声明
var orderSchema =mongoose.Schema({
  userId:mongoose.Types.ObjectId,       //用户id
  landlordId:mongoose.Types.ObjectId,   //房东id
  houseDataId:mongoose.Types.ObjectId,   //房源id
  checkinPersonId:mongoose.Types.ObjectId,    //入住人id 获取到姓名和电话
  checkinTime:Number,//入住时间
  checkoutTime:Number,//离店时间
  scheduledTime:Number,//预计到店时间
  roomFee:mongoose.Types.ObjectId,//房费：从房源那获取
  cleanFee:mongoose.Types.ObjectId,//清洁费:从房源那获取
  deposit:Number,//押金
  total:Number,//总计
  orderStatus:{type:Number,default:1},//订单状态：1待付款 2待入住  3待确定  4已消费 5已取消 
  refund:String,//退款：1处理中 2已完成
  
},{ 
  // 设置为true会自动的帮我们添加及维护两个字段 createdAt  updatedAt
  timestamps:true 
})
var Order=mongoose.model('order',orderSchema)

module.exports=Order