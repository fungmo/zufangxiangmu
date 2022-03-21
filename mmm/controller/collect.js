//收藏接口
const express = require('express') // 引入express
const router = express.Router() // 创建一个Router实例
const Collect = require('../models/collect.js')
const util = require('utility')

//添加或删除收藏

router.post('/add', async (req, res) => {
    const{userId,houseDataId} = req.body

    const u = await Collect.findOne({
        userId,
        houseDataId
      })
      //如果有收藏就取消收藏
    if(u){
        await Collect.findByIdAndRemove(u.id)
        req.success({info:"更改成功"})
      }

      await Collect.create({userId,houseDataId,})
      req.success({info:"更改成功"})
})


//通过用户Id查找收藏 

router.get('/query', async(req, res) => {
    const{userId} = req.body
   
    const u = await Collect.find({
        userId
      },{houseDataId:1});
      if(u){
        res.send({success:true,data:u ,info:"获取收藏列表成功"})
      }

     
})





module.exports = router