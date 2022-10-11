const express = require('express')
const router = express.Router()

router.get('/customer/add',(req,res)=>{
    console.log(req.query);
    res.send({code: 10,msg: '请求成功'})
})

module.exports = router