const axios = require('axios')
const { isUrl, fetchBuffer } = require('../../../lib/Function')
const fs=require("fs")
require ('../../../settings')
module.exports={
    name:"play",
    alias:["song"],
    usage:`${prefa}play <query>`,
    desc:"Plays the song...",
    category:"Media",
    react:"🎵",
    start:async(client,m,{command,prefix,text,args})=>{
               
if (!text)  return m.reply(`Please Enter Youtube Song Name`)
song = await axios.get(`https://api.zeeoneofc.my.id/api/downloader/youtube-playmp3?apikey=Lja3LTBXKt53Gm4&query=${text}`)
await client.sendMessage(m.from,{audio: song.result.download,fileName: ${song.result.title}.mp3',mimetype: 'audio/mpeg'},{quoted:m})
    }
}
