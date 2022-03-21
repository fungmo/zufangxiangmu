//用户 collection
const mongoose =require('mongoose')  

// 收藏表头

var collectSchema =mongoose.Schema({
  userId:mongoose.Types.ObjectId,  //用户id
  houseDataId:mongoose.Types.ObjectId, //房源id
  
},{ 
    // 设置为true会自动的帮我们添加及维护两个字段 createdAt  updatedAt
    timestamps:true 
})



const collect = mongoose.model('collect',collectSchema)

module.exports = collect