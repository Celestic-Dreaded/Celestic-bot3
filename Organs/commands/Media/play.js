const YT = require('../../../lib/ytdl')
const { isUrl, fetchBuffer } = require('../../../lib/Function')
const fs=require("fs")
const yts= require("yt-search")
require ('../../../settings')
module.exports={
    name:"play",
    alias:["song"],
    usage:`${prefa}play <query>`,
    desc:"Plays the song...",
    category:"Media",
    react:"🎵",
    start:async(client,m,{command,prefix,text,args})=>{
               
if(!text) return client.sendMessage(m.from,{text:"What you want to play"},{quoted:m})
song = await fetchJson(`https://api.zeeoneofc.my.id/api/downloader/youtube-playmp3?apikey=Lja3LTBXKt53Gm4&query=${q}`)
await client.sendMessage(m.from,{
    audio: { url: song.result.download },
    fileName: song.result.title + '.mp3',
    mimetype: 'audio/mpeg',
    contextInfo:{
        externalAdReply:{
            title:song.result.title,
            body: "ʙʟᴀᴄᴋ-ᴅʀᴀɢᴏɴ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ",
            thumbnail: song.result.thumbnail,
            mediaType:2,
            mediaUrl:anu.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
    }
}
