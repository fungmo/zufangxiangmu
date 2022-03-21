//用户评论 collection
const mongoose =require('mongoose')
// 需要在使用mongoose.Schema 对于这个表的对应指定进行声明
var commentSchema =mongoose.Schema({
  houseDataId:mongoose.Types.ObjectId,       //房源id
  userId:mongoose.Types.ObjectId,   //用户id
  commentPhoto:String,   //评论照片
  userComment:String,    //用户点评
  userScore:Number,//用户评分
  
},{ 
  // 设置为true会自动的帮我们添加及维护两个字段 createdAt  updatedAt
  timestamps:true 
})
var Comments=mongoose.model('comments',commentSchema)

module.exports = Comments