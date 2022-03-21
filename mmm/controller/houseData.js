const express = require('express')
const router = express.Router()
const HouseData = require('../models/houseData.js')
const util = require('utility')  //这个是用来加密的


//添加房源
router.post('/add',async (req,res)=>{
    const { houseType,householdType,housePeople,houseGPS,houseTime,Type,houseaddr,landlordId,houseInfo,houseFacility,status}=req.body
    const hd = {};
   hd.houseType=houseType||""
   hd.householdType=householdType||""
   hd.housePeople=housePeople||""
   hd.houseGPS=houseGPS||""
   hd.houseTime=houseTime||""
   hd.Type=Type||""
   hd.houseaddr=houseaddr||""
   hd.landlordId=landlordId||""
   hd.houseInfo=houseInfo||""
   hd.houseFacility=houseFacility||""
   hd.status=status||0
   hd.landlordId=landlordId
   const u = await HouseData.create(hd)
   req.success({info:'添加成功'})
   
})


//修改房源信息

















module.exports = router