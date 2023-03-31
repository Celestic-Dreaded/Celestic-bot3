module.exports = {
  name: "help",
  alias: ["h", "menu"],
  desc: "List all command",
  category: "General",
  react: "✅",
  start: async (client, m, { commands, args, prefix, text, toUpper }) => {
    const { pushName, sender } = m;
    if (args[0]) {
      let data = [];
      let name = args[0].toLowerCase();
      let cmd =
        commands.get(name) ||
        Array.from(commands.values()).find((v) => v.alias.includes(name));
      if (!cmd || cmd.type == "hide") return m.reply("No Command Found");
      else
        data.push(
          `*🍁Command :* ${cmd.name.replace(/^\w/, (c) => c.toUpperCase())}`
        );
      if (cmd.alias) data.push(`*👾Alias :* ${cmd.alias.join(", ")}`);
      if (cmd.cool) data.push(`*⏱️Cooldown:* ${cmd.cool}`);
      if (cmd.desc) data.push(`*🧾Description :* ${cmd.desc}`);
      if (cmd.usage)
        data.push(
          `*💡Example :* ${cmd.usage
            .replace(/%prefix/gi, prefix)
            .replace(/%command/gi, cmd.name)
            .replace(/%text/gi, text)}`
        );
      var buttonss = [
        {
          buttonId: `${prefix}help`,
          buttonText: { displayText: `help` },
          type: 1,
        },
      ];
      let buth = {
        text: `*ℹ️Command Info*\n\n${data.join("\n")}`,
        footer: "*©Eternity-Team*",
        buttons: buttonss,
        headerType: 1,
      };
      return client.sendMessage(m.from, buth, { quoted: m });
    } else {
      const { pushName, sender } = m;
      let cm = commands.keys();
      let category = [];

      for (let cmd of cm) {
        let info = commands.get(cmd);
        if (!cmd) continue;
        if (!info.category || info.category === "private") continue;
        if (
          !info?.category ||
          (info.category === "Nsfw" && !nsfw.includes(m.from))
        )
          continue;
        if (Object.keys(category).includes(info.category))
          category[info.category].push(info);
        else {
          category[info.category] = [];
          category[info.category].push(info);
        }
      }
      if (!nsfw.includes(m.from)) {
        var emo = ["📖","🎉", "🍁", "🍀", "🌊", "🎵", "🎟", "♨️", "🉐"];
      } else {
        var emo = ["📖","🎉", "🍁", "🍀", "🌊", "🎵", "🔞", "🎟", "♨️", "🉐"];
      }
      let txt = `*Hello* ${pushName} *Black Dragon*.
      
┌─✬ᴇᴅᴜᴄᴀᴛɪᴏɴ ᴄᴏᴍᴍᴀɴᴅꜱ✬
│➠${prefix}caclculator
│➠${prefix}define
│➠${prefix}element
└─────────◉

┌─✬ꜰᴜɴ ᴄᴏᴍᴍᴀɴᴅꜱ✬
│➠${prefix}reaction
│➠${prefix}hitler
│➠${prefix}rainbow
│➠${prefix}rip
│➠${prefix}old
│➠${prefix}shit
│➠${prefix}slap
│➠${prefix}trash
│➠${prefix}trigger
│➠${prefix}wanted
│➠${prefix}wasted
└─────────◉

┌─✬ᴍᴏᴅꜱ ᴄᴏᴍᴍᴀɴᴅꜱ✬
│➠${prefix}eval
│➠${prefix}ban
│➠${prefix}broadcast
│➠${prefix}leave
│➠${prefix}unban
└─────────◉

┌─✬ɢᴇɴᴇʀᴀʟ ᴄᴏᴍᴍᴀɴᴅꜱ✬
│➠${prefix}help
│➠${prefix}hi
│➠${prefix}mods
│➠${prefix}repo
│➠${prefix}profile
│➠${prefix}rank
│➠${prefix}stalk
└─────────◉

┌─✬ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ✬
│➠${prefix}delete
│➠${prefix}demote
│➠${prefix}disable
│➠${prefix}enable
│➠${prefix}groupinfo
│➠${prefix}ping
│➠${prefix}promote
│➠${prefix}remove
│➠${prefix}setppgc
│➠${prefix}support
│➠${prefix}join
└─────────◉

┌─✬ᴍᴇᴅɪᴀ ᴄᴏᴍᴍᴀɴᴅꜱ✬
│➠${prefix}spotify
│➠${prefix}igd
│➠${prefix}lyrics
│➠${prefix}play
│➠${prefix}playv
│➠${prefix}yta
│➠${prefix}yts
│➠${prefix}ytv
└─────────◉

┌─✬ᴜᴛɪʟꜱ ᴄᴏᴍᴍᴀɴᴅꜱ✬
│➠${prefix}google
│➠${prefix}reddit
│➠${prefix}shorturl
│➠${prefix}steal
│➠${prefix}sticker
│➠${prefix}toimg
│➠${prefix}weather
└─────────◉

┌─✬ᴡᴇᴇʙ ᴄᴏᴍᴍᴀɴᴅꜱ✬
│➠${prefix}soppai
│➠${prefix}anime
│➠${prefix}cosplay
│➠${prefix}couplepp
│➠${prefix}genshin
│➠${prefix}manga
│➠${prefix}neko
│➠${prefix}waifu
│➠${prefix}wallpaper
└─────────◉\n\n`;
      
      txt += `*ʙʟᴀᴄᴋ-ᴅʀᴀɢᴏɴ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*`
      const eternity = [
        "https://telegra.ph/file/b1d2451fa3985018da8d7.jpg",
      ];
      const eternitylogo =
        eternity[Math.floor(Math.random() * eternity.length)];
      client.sendMessage(m.from, {image:{url:eternitylogo}, caption:txt}, { quoted: m });
    }
  },
};
