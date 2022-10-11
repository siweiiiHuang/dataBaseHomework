const express = require('express')
const useRouter = require('./router')

const app = express()
app.use(useRouter)

app.use(function(err,req,res,next) {
    console.log('发生错误：' + err.message);
    res.send('Error!' + err.message)
}) 

app.listen(80,()=>{
    console.log('running');
})
