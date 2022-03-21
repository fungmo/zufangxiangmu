const express = require('express') // 引入express
const router = express.Router() // 创建一个Router实例
const LandlordUser = require('../models/landlordUser.js')
const util = require('utility')


// 变为房东
router.post('/add',async (req,res)=>{
     const {id}=req.body;
     const   u = await LandlordUser.create({
        userid:id,
     })

  req.success({info:'添加成功'})
})

//房东信息查询








module.exports = router