const fs = require("fs");
const chalk = require("chalk");
require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "94786802371, 94786802371";
}

global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb://mongo:8srx0q0cRy7FORWk6xOX@containers-us-west-165.railway.app:5815";
global.prefa = process.env.PREFIX || ".";
global.ggle = process.env.GOOGLE_API || "none";
global.wter = process.env.WEATHER_API || "none";
global.sessionId = process.env.SESSION_ID || "DRAGON";
global.malid = process.env.MAL_USERNAME || undefined;
global.malpass = process.env.MAL_PASSWORD || undefined;
global.port = process.env.PORT || 8080;
global.inboxblock = "false";

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
