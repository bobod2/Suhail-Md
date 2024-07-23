const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_00_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjksXG4gICAgICAgIDQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAxNzksXG4gICAgICAgIDU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDExLFxuICAgICAgICAxNDksXG4gICAgICAgIDU4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMixcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMixcbiAgICAgICAgODEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3OCxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzMsXG4gICAgICAgIDM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDksXG4gICAgICAgIDg0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMyLFxuICAgICAgICA3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIsXG4gICAgICAgIDUyLFxuICAgICAgICA0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTksXG4gICAgICAgIDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NixcbiAgICAgICAgODQsXG4gICAgICAgIDE4LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMTMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjl5bEFJVWZWb3pGVTUwblRRWTg3Z1RyRVl5WUhKVnR3SC9ZZGE4aDc3WWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIng0UXJ6bURzUVpxQ1ZvNURhTWFpOHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDQ3OTJjZTUtN2RjMy00MTY5LWE3M2QtZTA2NjY4ZWI3ZTM0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NixcbiAgICAgIDEzOSxcbiAgICAgIDIzNSxcbiAgICAgIDkwLFxuICAgICAgMTE4LFxuICAgICAgMTUzLFxuICAgICAgNDYsXG4gICAgICAyMDUsXG4gICAgICAxNjgsXG4gICAgICAxNzEsXG4gICAgICA2LFxuICAgICAgMTg2LFxuICAgICAgOCxcbiAgICAgIDE0NSxcbiAgICAgIDIyNyxcbiAgICAgIDE1MyxcbiAgICAgIDk5LFxuICAgICAgMjIwLFxuICAgICAgNjksXG4gICAgICAyMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE2LFxuICAgICAgNDAsXG4gICAgICAxMjcsXG4gICAgICAxOTEsXG4gICAgICAxMjEsXG4gICAgICAxMTUsXG4gICAgICAyMyxcbiAgICAgIDE1NyxcbiAgICAgIDIzMixcbiAgICAgIDI0NSxcbiAgICAgIDEyMyxcbiAgICAgIDIzNyxcbiAgICAgIDE2NSxcbiAgICAgIDE5MixcbiAgICAgIDE2MCxcbiAgICAgIDM0LFxuICAgICAgMTAwLFxuICAgICAgMjU1LFxuICAgICAgMTY1LFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRkJOUzE2TjRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU1ODExMTM4Njo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY5ODc5MTA5OTA2NjU1OjY2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BLVHZPWURFTHFkL0xRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRWp2QVd0Zno4YlBZUEhFckd3Rk1VUklzUlFvUm44S1IrSHdvTmFIbUZ4ST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJicFdFY0J5dStNc055ZEtaZkJtTEpxZW84TmNjRXpGbkFGRG45ejlyM3Nkc1BmcTlDelg4NmhnWmUzK29vc1lNVlljUlY5S2dYd2t5YUhMVXU1OE1CZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyUXRUaExhSkEvNUpndHRNYW1EYnF6NC94TVRUREhWdGc4M3lNVnlMWDFVZitqWENhclRna0lxcGp3M2xtUDZFQmJmRmtPdmtmQm5mWXhNem1FemZpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1NTgxMTEzODY6NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTcwMDAzMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURqY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRGpjLmpzb24iOiAie1wia2V5RGF0YVwiOlwidTRVa004UUcwK3N5VDh6ZE5BRm4xSXpJY0M4R1kzT2xYeUVHN3lYVXVRVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDIwMjAxNDU4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE3MDAwMzYyMzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "k",
  packname: process.env.PACK_NAME || "law",
  botname : process.env.BOT_NAME  || "kelvin junior",
  ownername:process.env.OWNER_NAME|| "kelvin",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
