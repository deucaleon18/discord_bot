const express=require('express')
const commentRouter=express.Router()
const Comment=require('../models/comments')

commentRouter

.get('/',(req,res,next)=>{
    Comment.find({}).
    then((comment)=>{
        res.StatusCode=200
        // res.setHeader='Content-Type','application/json'
        // console.log(comment)
        
        res.json({comments:comment})
        next()
})
.catch((err)=>{
    console.error(err)
})

})


module.exports=commentRouter