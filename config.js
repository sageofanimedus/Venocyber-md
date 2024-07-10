//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "macking565@gmail.com";
global.location = "Rivers, Nigeria.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/sageofanimedus/Venocyber-md";
global.gurl = process.env.GURL || "https://wa.me/message/IZR4AF7TZ3WYF1";
global.website = process.env.GURL || "https://wa.me/message/IZR4AF7TZ3WYF1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://api.duniagames.co.id/api/content/upload/file/4519354531672824146.jpg";
global.devs = "2347011582249";
global.sudo = process.env.SUDO || "2347011582249";
global.owner = process.env.OWNER_NUMBER || "2347011582249";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU1HVnNYQno0WDZFMStETzk3VGFFaXo1TVRuM3JncVRHSndCeThBRlRIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUVtN21kWnU1em9EOTFXRlQ3Ky9GOHJFbDVEMWNvU1lRSTNRN2puK0ZGYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQXgyNEUzWllSa2JiZTczWFRVNnJaOWJ0TGhyN051MVY5R3pDbWcrRlVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqWmFsRUZ5azU4SlV2WGlrSWUzNXRVdW9VajVSb2V4QWoweXJDWHJ4a25NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9CNmpBQ0R2NkY3cHZQemJBYTkxY2NtblA0NjhEN3czbHFQamNEelFqVnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJaNmRFWkhEdWUvcSs4VUhWMGFFTUVNWnM0RmFPVHpaalJGb01GRmM2QjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0FTMFZGaTdZaVdXNkU0TG51ZS8vR2VJMkdWa1ZZSzJhUWE5QUNiMW9rQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1hkc2pJL0JRSzFhU3VmQWpWUnB1aXJpWFY2WUpsK0NZOGh1R2lQVWlWdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iko2MnNOMFhhYmpBSVdYblZlWUVZSncvWHh0M2JEZTFjenpVc2MwbjNjUnB6MVM5SEp2NlEzSHJmaElOT1Y4aUZ3S1I3R0Foekk0MGkxU2UxK0x5R0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6ImN2VWZYZzVRS2lhcTRkbExjcStDZ1AvN1ZCQ0ltRkJqL25ac2xOZEE0Um89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlpwNncyTTkzVGFlVVBHY1RxWjRWZnciLCJwaG9uZUlkIjoiYTg4MTUyNGQtZmEwNS00ZDNhLTlkZGEtZDBlM2I5N2M1YjVhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxwK291VVByS2I4OGYwdC9UNGthZWhvNy9GOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCM2NhaXpmQ2tLbGhKR2FhZEU2V3JubllEY1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRkxESkxTU1YiLCJtZSI6eyJpZCI6IjIzNDcwMTE1ODIyNDk6NTZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRXZlcnlkYXkgQWR2ZW50dXJlcyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0NZOVRvUWl1NjR0QVlZQXlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRXNZNTQzQW9KT3FpcXlwNENxUndKMjBlQlFaMkNCclgyYlorc3lXa1JRcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiN3pVQnRTK1JOcnpNQ3hCdGpmOFBuNjlCZm45Z1pvakcwc2hFaTlua0ZHbzhETjlDS3JEQVVGZDBKSnMrR3RGWjJxZENmQURETGxqc2IvRXhEQjNaQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IlM4TE9IcVpxK0tFRWJJM1MvTVpBUlRNTTk0VFMvdENTYllMelFXNG1qUXR3OS9YZTUvVVJsTXduREdyV09ZREJUblNBZ3Q2NGI1QlNOUVRhODlKWkFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzAxMTU4MjI0OTo1NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSTEdPZU53S0NUcW9xc3FlQXFrY0NkdEhnVUdkZ2dhMTltMmZyTWxwRVVMIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNTk2MjQ3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU0wSCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
