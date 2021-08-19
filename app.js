require('dotenv').config()
const Discord=require('discord.js')
const client=new Discord.Client()
// const uri=process.env.MONGO_URI

const axios = require('axios');

const getComment=async()=>{
  const results=await axios.get('http://localhost:3000/comments')
  console.log(results.data.comments[0].quote);
}

getComment();




client.on('ready',()=>{
    console.log("Logged in")
})


client.on('message',(message)=>{
    if(message.author.bot) return ;
    console.log(`${message.content}:${message.author}`)
    // if(message.content==='Hello'){
    //     message.channel.send('Hello')
    // }
    // if(message.content==='Pui'){
    //     message.channel.send('We love PPUI')
    // }
    // if(message.content==='Wassup'){
    //     message.channel.send('Chal na lavde kaam kar')
    // }
    // if(message.content==='sad'||message.content==='depressed'){
   
        // message.channel.send(`${motivation[0].quote}`)
    // }
})
client.login(process.env.TOKEN)