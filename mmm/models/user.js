//用户 collection
const mongoose =require('mongoose')  

// 需要在使用mongoose.Schema 对于这个表的对应指定进行声明
var userSchema =mongoose.Schema({
    realName:String,    //真实姓名
    userName:String,    //用户名
    phone:Number,       //手机
    demand:mongoose.Types.ObjectId,   //需求：关联房源信息推送表
    profession:String,   //职业
    email:String,       //邮箱
    selfIntr:String,    //个人介绍
    checkPerson:String,      //我的入住人
    idNumber:String,    //身份证号
    sex:Number,         //性别：1男  2女
    nickName:String,    //昵称
    pwd:String,         //密码
    historyOrder:String, //历史订单
    houseCollection:String, //房源收藏
    history:String,      //历史浏览
    myEvaluation:String, //我的评价
    address:String,        //地址
    status:Number,      //状态：1实名  2未实名  3已注销
    photo:String,       //头像
    balance:Number,     //余额
    myContract:mongoose.Types.ObjectId,   //我的合同：关联另外一个表的_id的值
    credit:String,      //信用
    coupon:String,      //优惠券
    studentCf:String,   //学生认证
    points:Number,      //会员积分
    myLandlord:mongoose.Types.ObjectId,   //我的房东：关联另外一个表的_id的值
},{ 
    // 设置为true会自动的帮我们添加及维护两个字段 createdAt  updatedAt
    timestamps:true 
})
var User=mongoose.model('user',userSchema)

module.exports=User