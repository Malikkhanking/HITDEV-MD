const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="hitdeveloper2023@gmail.com"
global.location="Port-au-Prince, Haiti."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github=process.env.GITHUB|| "https://github.com/HITDeveloper2023/HITDEV-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaDAkV9FHWqAMMHvb40b";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaDAkV9FHWqAMMHvb40b" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/09bb04e12ce3828e9cd2e.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "50944727644" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923030673336";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923030673336";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "50944727644,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://hitdev-qr.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_10_46_11_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDU2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNixcbiAgICAgICAgMjE3LFxuICAgICAgICA5MSxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk3LFxuICAgICAgICA2MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzLFxuICAgICAgICA5MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTczLFxuICAgICAgICA0MSxcbiAgICAgICAgMTksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDcwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDMzLFxuICAgICAgICA3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDY3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMixcbiAgICAgICAgOTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDkzLFxuICAgICAgICA3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDk2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNwWkNCRjJKV3dWZXdodk5RTzV5dzZvNWx0a0NIaldwT1VqNDA0dGhBTW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDMwNjczMzM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NTgwQjZBMTY5QTBGQTY1MDY0NEQ2QUE5QkY2Q0JEMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE5MjY3OTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTm5wbUc2YmdRR0dHZVhvWWlHazI4UVwiLFxuICBcInBob25lSWRcIjogXCI4NjMzMGI3Zi0wZTdiLTQ4NGYtYTVhYi1jNTY5ZDE2ZTgzMmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI5LFxuICAgICAgMTIsXG4gICAgICA4MSxcbiAgICAgIDY1LFxuICAgICAgMTA3LFxuICAgICAgNjYsXG4gICAgICAxMjksXG4gICAgICA0NyxcbiAgICAgIDQ0LFxuICAgICAgMjIyLFxuICAgICAgMTQ0LFxuICAgICAgMTAyLFxuICAgICAgMjA2LFxuICAgICAgMTgyLFxuICAgICAgMjQ2LFxuICAgICAgMTc4LFxuICAgICAgMjAxLFxuICAgICAgODcsXG4gICAgICA3MyxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYyLFxuICAgICAgMTYzLFxuICAgICAgNDYsXG4gICAgICAyNixcbiAgICAgIDExMyxcbiAgICAgIDEzMCxcbiAgICAgIDE4NCxcbiAgICAgIDE3MSxcbiAgICAgIDI5LFxuICAgICAgNDQsXG4gICAgICAyNTIsXG4gICAgICAyNCxcbiAgICAgIDk3LFxuICAgICAgNCxcbiAgICAgIDE3NSxcbiAgICAgIDIxNixcbiAgICAgIDU2LFxuICAgICAgMTM3LFxuICAgICAgMjA2LFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdGNzM4ODFKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMzA2NzMzMzY6OTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMjk1NDY1MzA4MTY4Mzo5MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJXb3JsZCBJcyBOb3RoaW5nXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW1PNCs0SEVJRzI3TGtHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwaERBRlRiL01VNjd6dHJMV0tGMjhqZ0dwMGd6SnJBeG1ROXUrZlRZR2tJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjF0d2tFeEkrQVk2a1N1djFpREE2eTFJWVVpOEVRWll5TS8xOTQ5YXMwVElQN21mTlEzaUJTbkhqZEJwSmRkQzdKQmR6TDZzbDY3M0w4QW41eC92eERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBNRlNlcDdXaTRHTlB3SS82K3o4OG5MckVIQXY1SE5FWnpIbXZuU1paY1Rma1o2cTBXQVhuUXRtY0dkdUI4cytmVFBFRzAydGlEdzg5K1dJbEtNR0JnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAzMDY3MzMzNjo5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxOTI2Nzg5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQm1sXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCbWwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNYXpCNWh1d293LzFWVWp6anVZVTRKeUxPekRVV2h6MXk0YzJsdVVMUC9JPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMTEzNTg3MjksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTgxNjA3MzU3OVwifSIKfQ=="
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: HITDEV-MD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0",
  caption : process.env.CAPTION || "『© M-MALIK-KHAN-MD' 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫』" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʜɪᴛᴅᴇᴠ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ʜɪᴛᴅᴇᴠ ᴛᴇᴄʜ』*\n youtube.com/@hitdeveloper0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ʜɪᴛᴅᴇᴠ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "M-MALIK-KHAN-MD'",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "HITDEV"  ).toUpperCase(),



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
