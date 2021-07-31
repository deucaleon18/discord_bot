require('dotenv').config()
const express=require('express')
const app=express()
const morgan=require('morgan')
const uri=process.env.MONGO_URI
const mongoose=require('mongoose')
const commentRouter=require('./routes/commentRouter')

app.use(morgan('dev'))
app.use('/comments',commentRouter)

mongoose.set('bufferCommands', false);
try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      uri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );
  
  } catch (e) {
    console.log("could not connect");
  }

  const PORT=process.env.PORT || 3000

  const http =require('http')
  const hostname='localhost'
  
  http.createServer(app).listen(PORT,hostname,()=>{
    console.log(`The server is up and running on port:${PORT}`)
  })
  