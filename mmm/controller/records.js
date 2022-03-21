//浏览历史接口
const express = require('express') // 引入express
const router = express.Router() // 创建一个Router实例
const Records = require('../models/records.js')
const util = require('utility')

//添加浏览历史
router.post('/add', async(req, res) => {
    const{userId,houseDataId} = req.body
    const u = await Records.findOne({
        userId,
        houseDataId
      })
   try{
       
      // 没有浏览过的话就添加金表单
      if(!u){
        Records.create({
            userId,
            houseDataId,
            times:Date.now()
            })
         req.success({info:"添加历史浏览记录成功"})
      }
      // 如果有浏览过的就改变时间
      u.update({times:Date.now()})
      req.success({info:"添加历史浏览记录成功"})
   }catch(e){
    req.error({ info: '添加失败',e})
   }
})



//通过用户Id查找浏览历史 获取到房源时间与房源id 根据时间渲染页面

router.get('/query', async(req, res) => {
    const{userId} = req.body
   
    const u = await Records.find({
        userId
      },{times:1,houseDataId:1});
      if(u){
        res.send({success:true,data:u})
      }

     
})





module.exports = router