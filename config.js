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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BPUzRZNk93Lzl4SENXOHdHL1k2eVhyTU5Dc1JxMUxhWVZvSitGVjlVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU1mSWx4dStjZzJXa2Q4NGthMzlaQnJPMkdFN2U3YXZWYm1xRUpKbmlWQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TlZqSjgyQ1k5b2d0dXJLV3h4OGxXcVRGdStBQndIR3E2SksvaC9SUWxJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjVGVoTDJSSEZpVU1SNWJPWE5YVTU5dHFSN2U5aXlGejVuNS9pd2ovMUNzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZGeElOTTVjRFJtWWxIVUtNdmkyeGozVklUQVBiRHJZRTdxTHVXRjRPa009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRTUHFMZ2hLL1FSSS9IREN0YWhpVlZKYzZpU2JkbVltYU1XdVREZVRZbEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0R3Ui9rUUlXNkw4VWlaMWRKWVY1Y2dFUlMwd091M3h2aWNFcEJ5amNXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekpvVmVrS0tYTHlmNUxCQmlGMk1nS1F4cFFacklWMkdaSVE1V3ZHYklEbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZxdDYxMWZsanZJSU05cjZ3K2twRlFvcVZvVWdOZHM4aUNiNE9ta2lCNEFvU1UrcVM4bjR1bjFNZTFxclRyUVR4OTZna0ZyaEJhT3QyMlp6L1lRcmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTczLCJhZHZTZWNyZXRLZXkiOiJ6VHIzWHRBbFg2UTVzalZDTjU3V3dCV1B4akFPdHhLK1ZuZ0pYbGN6WmFZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoaTA3RS1PalM4R1RVWjQ0WEJ0RmpRIiwicGhvbmVJZCI6ImFlMDQxNDdjLWY4MzktNDIwMi1hYzFiLTVhZTdjOTliM2JiYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMNmdRTWpBdlVNaW95akpBUy9IM3lzQnZKenc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0lLQ3U2N1E3UUE4WmdmbmtwVDFhK2E2YWJ3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJLUENDTDZKIiwibWUiOnsiaWQiOiIyMzQ3MDExNTgyMjQ5OjU4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkV2ZXJ5ZGF5IEFkdmVudHVyZXMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tDWTlUb1E0NkhudEFZWUJTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkVzWTU0M0FvSk9xaXF5cDRDcVJ3SjIwZUJRWjJDQnJYMmJaK3N5V2tSUXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImRmLytydUFaZlFDTldqcHNHTXRxa01hcjRNVElLYkJuRy9uaWViUjVFVVljd3c3aUczQk1mKzQyRzdKN3lrYVhNc3RUMjhvdGlVNnltSkhCTkU5MEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIwS1hCajRKc2EwdDlwVVVJVTBvYnhRVHNzTlE2Z2drbXlLNXhzbGxKMVlod1lZc3VKdTFwN0dRVnJQSGxsMVM3U2VCLzNmSlJVcW1DRmRjem9PbWpqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwMTE1ODIyNDk6NThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUkxHT2VOd0tDVHFvcXNxZUFxa2NDZHRIZ1VHZGdnYTE5bTJmck1scEVVTCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTM1NjUyOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNMEgifQ=="
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
