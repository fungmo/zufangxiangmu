const express = require('express') // 引入express
const router = express.Router() // 创建一个Router实例
const User = require('../models/user.js')
const util = require('utility')

/* curd操作 */
//用户注册
router.post('/add', async(req, res) => {
    const {
        userName, //账号
        realName, //真实姓名
        sex, //性别：1男  2女
        phone, //手机
        pwd, //密码
    } = req.body;

    if(!userName)  return res.error('姓名不能为空')
    if(!sex  || !pwd|| !phone) return req.error('缺少必要参数')
    if(!/^[a-z0-9_-]{6,16}$/.test(userName))return req.error('只允许26个字母和数字，最6位最大16位')
    if(!/^1[23456789]\d{9}$/.test(phone)) return req.error('请填写正确的手机号码')
    if(!/^[a-zA-Z]\w{5,17}$/.test(pwd))return req.error('密码格式错误，以字母开头，长度在6-18之间，只能包含字符、数字和下划线。')
    
    try {
         // 先判断当前用户名是否已经注册过用户
        const u = await User.findOne({
            userName
          })
          if(u) return req.error('当前用户已经存在，不能重复注册')

u = await User.create({
            userName, //账号
            realName, //真实姓名
            sex, //性别：1男  2女
            phone, //手机
            })
            //密码加密
        await u.update({pwd: util.md5( pwd + u.createdAt.getTime() ) })

      req.success({info:'添加成功'})

    } catch (e) {
        req.error({ info: '创建失败' })

    
    }
})


// 根据id修改信息

router.post('/update',async (req,res)=>{
    const {id,profession,email,selfIntr,sex,nickName,address,photo,} = req.body;
    const u  = await User.findById(id);
    if(u) {

         const updateData = {};
         if(profession) updateData.profession = profession;
         if(email) updateData.email = email;
         if(selfIntr) updateData.selfIntr = selfIntr;
         if(sex) updateData.sex = sex;
         if(nickName) updateData.nickName = nickName;
         if(address) updateData.address = address;
         if(photo) updateData.photo = photo;
        
         await User.findByIdAndUpdate(id,updateData)
         req.success({info:'修改成功'})

    } else {
        req.error('该用户不存在')
    }
       
})


// 登录
router.post('/login',async (req,res)=>{
    const { userName,pwd } = req.body;
    const u = await User.findOne({ userName }) ;
  if(!u) return req.error({info:'用户名或者密码不正确'})
  const curPwd = util.md5(pwd+ u.createdAt.getTime());

  if(curPwd === u.pwd) {
    const token = req.sign({uid:u._id});
    //登录成功后带token
    req.success({info:'登录成功',token})
   
  } else {
    req.error('用户名或者密码不正确 ')
  }
    
  
  })
  






module.exports = router