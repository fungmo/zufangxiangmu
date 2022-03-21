//用户 collection
const mongoose =require('mongoose')  

// 浏览历史记录

var recordsSchema =mongoose.Schema({
  userId:mongoose.Types.ObjectId,  //用户id
  houseDataId:mongoose.Types.ObjectId, //房源id
  times:Number //浏览时间
  
},{ 
    // 设置为true会自动的帮我们添加及维护两个字段 createdAt  updatedAt
    timestamps:true 
})










const records = mongoose.model('records',recordsSchema)

module.exports = records