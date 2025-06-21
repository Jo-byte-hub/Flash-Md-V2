require('dotenv').config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'paused';
}

module.exports = {
    prefixes: process.env.PREFIX
        ? process.env.PREFIX.split(',').map(p => p.trim())
        : [''],

    NUMBER: process.env.YOUR_NUMBER || '2348104400066',
    MODE: (process.env.MODE || 'private').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || '༺𝐉𝐎𝐒𝐇𝐔𝐀༻',
    ANTICALL: process.env.ANTICALL || 'on',
    ADM: process.env.ANTIDELETE || 'on',
    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'on',
    AUTO_LIKE: process.env.AUTO_LIKE === 'on',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'on',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
   ALIVE_URL: process.env.ALIVE_URL,
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0hjUjBYdFEvd3pGL3JNZ3A4WXplanF5Sld6UDlBZDF3aXYxK2doViswWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3dnYWtEUjJlTDhWN0MwMEpxcThEM3RWb1dzV3dvV1BoNFYvOElES1FrMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQnVvVDNBandzTkVobFFMbWxqUHdOMzdPVjVubEIxQXJvbFp0UnBjYjFZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJobHFsbjYrK3NXWHliYzBTanhXeW8xWlYvZGtzZXJVUkVJTlExNnB5TEZrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNIOTdzdHZWMVFodXE3eDA3WTdjRUxQWjduSVdTVXcrMG0zLzVrdjhjWEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjM2dUVmdFFFR0oycVplTU52aTIra25jbHJnNmR2Vi9Ea1NkUjJvblBOdzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE4xdVNFTXlXNWVDQUFGbWU0N2VUQmY2ZUtIN3ovWkxEUDZsVk1XdjZsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR21oUjd0MDFsUjE1dFc1R3ozelpPTVgycU1FdGRJT0ZHaTVWZXUwVmtIVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhkQW12ckZjaTEyTWhvK05UT1BQTEZzVURNMm5TNENMb0p1T3RkSmlIdGwxYytoVEUzeUtJMndaYTI4RkdseWhkNTNYZ0RCZHl6V1pyVmlNSzN2L0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJJeDdHUVBVZ0FqUVZZZm9COFhOVmdJVU9mWXFzOHQvdmM2UmlCcGgvSU9vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMDQ0MDAwNjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjkzNkE0OEY0N0FDMzUxOThDQjA2RTc1RkVCMDkzQkYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDQzNDEwNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODEwNDQwMDA2NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFNkQ0MEZFN0ZGNjhDOEI1MTE5RjBFQUZDMEYzRjUzQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUwNDM0MTE0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJENkFZQ0Q3UyIsIm1lIjp7ImlkIjoiMjM0ODEwNDQwMDA2NjoyMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPa295ZSBKb3NodWEiLCJsaWQiOiIxNjEzNjUyNzcyNDU2MDoyMEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tEbHNMY0ZFSlNDMXNJR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InJRNnpYeFdjU21CdDVDRStoVytmV0RiY01yeFprMEg0ZjR3UC8wZ21TaXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im5jQjB5SXUxL0QwUlAxOVA3dmViRlJ5Sll0MUFjUWQ4VXo2cGxvWTMyM2J2MloyVzhod1RtTVZ4bTh6aFk5NUlCRzhaSE12bVlybjd4YnBDcUxNbUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNWjVDdFNuM1ZwQ2VhOWsrUWhIN3pBaGNONFI3aVFUT0JPc0FtRkJwVk9QYm1zdzBBWlVXYXJVS3IxOFFPWWtwa2tyaHgrMzEwcnRNNE9BU2Rrak5CQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMDQ0MDAwNjY6MjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTBPczE4Vm5FcGdiZVFoUG9Wdm4xZzIzREs4V1pOQitIK01ELzlJSmtvcyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNDM0MDgyLCJsYXN0UHJvcEhhc2giOiIyRzRBbXUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUl3RCJ9',
    timezone: 'Africa/Lagos',
    USER_LID: process.env.YOUR_LID || null,
    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
