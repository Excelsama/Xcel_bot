let {
   runtime,
   formatp,
   prefix,
   smd,
   smdBuffer,
 } = require("../lib");
 const axios = require("axios");
 const fetch = require("node-fetch");
 const os = require("os");
 const speed = require("performance-now");
 const Config = require("../config");
 const cheerio = require("cheerio");
 smd({
   cmdname: "chkbot",
   alias: ["chk", "chkserver"],
   type: "info", 
   react:"📡", 
   info: "get bot server stats"
 }, async _0xdfc3ca => {
   try {
     const _0x37ca41 = process.memoryUsage();
     const _0x4a72de = os.cpus().map(_0x39cb6a => {
       _0x39cb6a.total = Object.keys(_0x39cb6a.times).reduce((_0x432663, _0x5a155c) => _0x432663 + _0x39cb6a.times[_0x5a155c], 0);
       return _0x39cb6a;
     });
     const _0x410388 = _0x4a72de.reduce((_0x8a6a46, _0x3dde47, _0x4edc26, {
       length: _0x378aa4
     }) => {
       _0x8a6a46.total += _0x3dde47.total;
       _0x8a6a46.speed += _0x3dde47.speed / _0x378aa4;
       _0x8a6a46.times.user += _0x3dde47.times.user;
       _0x8a6a46.times.nice += _0x3dde47.times.nice;
       _0x8a6a46.times.sys += _0x3dde47.times.sys;
       _0x8a6a46.times.idle += _0x3dde47.times.idle;
       _0x8a6a46.times.irq += _0x3dde47.times.irq;
       return _0x8a6a46;
     }, {
       speed: 0,
       total: 0,
       times: {
         user: 0,
         nice: 0,
         sys: 0,
         idle: 0,
         irq: 0
       }
     });
     let _0xce26d = speed();
     let _0x3db049 = speed() - _0xce26d;
     neww = performance.now();
     oldd = performance.now();
     respon = ("\nResponse Speed " + _0x3db049.toFixed(4) + " _Second_ \n " + (oldd - neww) + " _miliseconds_\n\nRuntime : " + runtime(process.uptime()) + "\n\n💻 Info Server\nRAM: " + formatp(os.totalmem() - os.freemem()) + " / " + formatp(os.totalmem()) + "\n\n_NodeJS Memory Usaage_\n" + Object.keys(_0x37ca41).map((_0x19d575, _0x3942d9, _0x3fa08c) => _0x19d575.padEnd(Math.max(..._0x3fa08c.map(_0x6548cb => _0x6548cb.length)), " ") + ": " + formatp(_0x37ca41[_0x19d575])).join("\n") + "\n\n" + (_0x4a72de[0] ? "_Total CPU Usage_\n" + _0x4a72de[0].model.trim() + " (" + _0x410388.speed + " MHZ)\n" + Object.keys(_0x410388.times).map(_0xffc60c => "- *" + (_0xffc60c + "*").padEnd(6) + ": " + (_0x410388.times[_0xffc60c] * 100 / _0x410388.total).toFixed(2) + "%").join("\n") + " " : "") + "\n\n ").trim();
     _0xdfc3ca.reply(respon);
   } catch (_0x13d03e) {
     await _0xdfc3ca.error(_0x13d03e + "\n\ncommand : chkbot", _0x13d03e, false);
   }
 });





smd(
  {
    pattern: "ping",
    desc: "To check ping",
    category: "bot",
    filename: __filename,
  },
  async (message) => {
    try {
      var startTime = new Date().getTime();
      const { key } = await message.reply("*Pinging...*");
      var endTime = new Date().getTime();

      let responseText = `*ᴘᴏɴɢ*\n *${endTime - startTime}ᴍs*`;
      responseText += `\n\n${Config.caption}`;

      message.bot.sendUi(
        message.jid,
        { caption: responseText },
        { quoted: message },
        "text",
        "true"
      );
    } catch (e) {
      return await message.error(
        `${e}\n\n command: ping`,
        e,
        `*_An error occurred while processing your request._*`
      );
    }
  }
);