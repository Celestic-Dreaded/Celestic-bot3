require('../../../settings')
const axios = require('axios')
module.exports = {
    name: "repo",
    alias: ["nezuko"],
    usage: `${prefa}repo`,
    desc: "Will send you details of our bot",
    react: "✅",
    
    category: "General",
    start: async (client, m, {
        command,
        prefix,
        text,
        args
    }) => {
let yup = [
            'https://telegra.ph/file/b1d2451fa3985018da8d7.jpg'
          ]
let nezuko = await axios.get('https://api.github.com/repos/nimesh-official/Black-Dragon')
let rae = yup[Math.floor(Math.random() * yup.length)]

var rr = `✨ _*🅽︎🅴︎🆉︎🆄︎🅺︎🅾︎*_  ✨\n\n🍀 *Description:* ${nezuko.data.description}\n\n 📎 *Repo Link:* පකද බලන්නෙ \n\n 🌠 *Total Star:* ${nezuko.data.stargazers_count}\n\n 💕 *Total Forks:* ${nezuko.data.forks}\n`
await client.sendMessage(m.from,{image:{url:rae}, caption:rr},{quoted:m})
    }
}
