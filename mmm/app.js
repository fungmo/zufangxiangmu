const express = require('express')
const path = require('path');
const User = require('./controller/user.js');
const LandlordUser = require('./controller/landlordUser.js');
const HouseData = require('./controller/houseData.js');
const Records = require('./controller/records.js');
const Collect = require('./controller/collect.js');
const Order = require('./controller/order');
const Comments = require('./controller/comments');
const housePopularize = require('./controller/housePopularize');

// 如果需要在req当中读取cookies 就需要安装 cookie-parser  npm  i cookie-parser --save
const cookieParser = require('cookie-parser')

// 安装cookie-session  npm i cookie-session 
const cookieSession = require('cookie-session');

//设置令牌
const jwt = require('jsonwebtoken');

const multer = require('multer'); // 引入 处理formData数据 包括上传图片

//建立与数据库的操作
const mdb = require('./db')

const app = express()

app.use(cookieParser()) // 使用cookie解析器

app.use(cookieSession({
    name: 'session', // 保存到客户端的cookie的name
    secret: '123456', // 加密密匙
    maxAge: 24 * 60 * 60 * 1000, // 过期时长
}))

//解决跨域问题
const cors = require('cors')
app.use(cors())

//设置令牌
app.use((req, res, next) => {
    req.sign = (res) => { //在req里设置sign方法 当在其他文件需要使用的时候就不需要每次都const  jwt = require('jsonwebtoken'); 引入jsonwebtoken
        return jwt.sign(res, '123456')
    }
    next();
})

//有些页面是需要有指令才能访问的就可以这样设置
//黑名单机制 指定要检查url
app.use((req, res, next) => {
    const {
        url
    } = req
    const blackList = [] //这里写的就是需要密令才能访问的地址
    if (blackList.includes(url)) {
        try {
            const tk = req.headers.authorization; //获取到密令
            const decode = jwt.verify(tk, "123456"); //解密密令
            req.decode = decode //设置到req对象属性里让其他文件可以直接拿到

        } catch (e) {
            res.status(401).end() //没有拿到密令就报401错误
        }

    }

    next() //不需要密令的就直接执行下一条代码
})

//设置静态文件
app.use(express.static('./'))

// express 当中使用自带的json方法和urlencoded方法来解析body内容
app.use(express.urlencoded({
    extended: false
})) // urlencoded
app.use(express.json()) // json 

// 添加error 和 success方法方便直接返回信息
app.use((req,res,next)=>{

    req.error = (info)=>{
      res.send({success:false,info})
    }
  
    req.success = ({data,info})=>{
      res.send({success:true,info,data})
    }
    next();
  })
// User相关的业务
const Userfix = '/api/v1'
app.use(Userfix+'/user',User);  //用户操作窗口
app.use(Userfix+'/landlordUser',LandlordUser); //房东操作端口
app.use(Userfix+'/houseData',HouseData); //房源操作端口
app.use(Userfix+'/records',Records) //浏览历史操作端口
app.use(Userfix+'/collect',Collect) //收藏操作端口
app.use(Userfix+'/order',Order) //订单操作接口
app.use(Userfix+'/comments',Comments) //评论操作接口
app.use(Userfix+'/housePopularize',housePopularize) //房源发布接口




app.listen(3001,()=>{
    console.log('服务器已开启端口号为3001');
    
})