//房东用户 collection
const mongoose = require('mongoose')

// 需要在使用mongoose.Schema 对于这个表的对应指定进行声明
var landlordSchema = mongoose.Schema({
    phone: Number, //手机
    status:Number,      //状态：0.未审核 1.审核中 2.审核通过 3.审核未通过
    nickName: String, //昵称
    photo: String, //头像
    balance: Number, //收益
    myContract: Number, //合同:绑定合同
    myOrder:Array,//订单
    myHouse:Array,  //我的房源
    myBankCard:Number,//银行卡
    myDeposit:Number,  //我的押金
    platformDeposit:Number, //平台押金
    myPopularize:Array ,//我的推广
    userid: {type: mongoose.Types.ObjectId,ref:'user'}
}, {
    timestamps: true // 设置为true会自动的帮我们添加及维护两个字段 createdAt  updatedAt
})
var landlord = mongoose.model('landlordSchema', landlordSchema)

module.exports = landlord