//房源推广接口
const express = require('express') // 引入express
const router = express.Router() // 创建一个Router实例
const housePopularize = require('../models/housePopularize')
const util = require('utility')

//添加房源
router.post('/add',async (req,res)=>{
    const { 
        houseDataId,//房源Id
        houseContent,//房源内容
        houseInfo,//房源标题
        housePicture,//房源图片
    }=req.body

    console.log(houseDataId);
    if(!houseDataId)  return req.error('此项不能为空')
    if(!houseContent)  return req.error('房源内容不能为空')
    if(!houseInfo)  return req.error('房源标题不能为空')
    if(!housePicture)  return req.error('房源图片不能为空')
    try {
        //先判断当前房源是否已经发布过
        var u = await housePopularize.findOne({
            houseDataId
        })
        if(u) return req.error('当前房源已经存在，不能重复发布')

        u = await housePopularize.create({
        houseDataId,//房源Id
        houseContent,//房源内容
        houseInfo,//房源标题
        housePicture,//房源图片
            })

    req.success({info:'添加成功'})

    } catch (e) {
        console.log(e);
        req.error({ info: '发布失败' })

    
    }
})


// 根据id修改信息

router.post('/update',async (req,res)=>{
    const {id,housePicture,houseVideo,houseInfo,houseContent,} = req.body;
    const u  = await housePopularize.findById(id);
    console.log(u);
    if(u) {

         const updateData = {};
         if(housePicture) updateData.housePicture = housePicture;
         if(houseVideo) updateData.houseVideo = houseVideo;
         if(houseInfo) updateData.houseInfo = houseInfo;
         if(houseContent) updateData.houseContent = houseContent;
        
         await housePopularize.findOneAndUpdate(id,updateData)
         req.success({info:'修改成功'})

    } else{
        req.error('该房源不存在')
    }
       
})

module.exports = router