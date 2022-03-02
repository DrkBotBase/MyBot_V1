/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const handler = Config.HANDLERS
const prefix = handler[2]
const version = Config.VERSION
const wk = Config.WORKTYPE == 'public' ? false : true
const axios = require('axios');

const GMTh = new Date().getHours()
const GMTm = new Date().getMinutes()

/*Tarjeta Owner*/
const vCard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Ian\n'
            + 'ORG:DrkBot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=573508770421:+57 350 877 0421\n'
            + 'END:VCARD'


DrkBox.addCommand({pattern: 'alive', fromMe: wk}, async (message, match) => {
    var image = await axios.get('https://raw.githubusercontent.com/DrkBotBase/WhatsAsenaDuplicated/master/media/gif/PicsArt_07-18-06.46.26.jpg', {responseType: 'arraybuffer'})
    await message.sendMessage (Buffer.from(image.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☢️ *𝐃𝐫𝐤𝐁𝐨𝐭* ☢️ 〙\n┗━━━━━━━━━━━━━━━━━━━\n┠⊷️ *Version:*\n┃ ```'+Config.VERSION+'```\n┠⊷️ *Canal de Telegram:*\n┃ http://bit.ly/TLgramDrkBot\n┠⊷️ *Grupo de Soporte:*\n┃ http://bit.ly/SupportDrkBot\n┠⊷️ *Creador:*\n┃ http://bit.ly/OwnerDrkBot\n┗━━━━━━━━━━━━━━━━━━━\n*/menu* Muestra comandos del BOT'})
});

DrkBox.addCommand({pattern: 'owner', fromMe: wk}, async (message, match) => {
    await message.sendMessage({displayname: "Ian", vcard: vCard}, MessageType.contact);
});

DrkBox.addCommand({pattern: 'menu', fromMe: wk}, async (message, match) => {
  var _0x8425c=_0x5088;function _0x5088(_0x3a8cf9,_0x1237f6){var _0x3e9f6f=_0x3e9f();return _0x5088=function(_0x5088af,_0x2b1578){_0x5088af=_0x5088af-0x1e4;var _0x39a6cc=_0x3e9f6f[_0x5088af];return _0x39a6cc;},_0x5088(_0x3a8cf9,_0x1237f6);}(function(_0x343ccd,_0x2aa416){var _0x4278bd=_0x5088,_0x321b8d=_0x343ccd();while(!![]){try{var _0x27b7b4=parseInt(_0x4278bd(0x22b))/0x1*(parseInt(_0x4278bd(0x1f2))/0x2)+-parseInt(_0x4278bd(0x222))/0x3*(-parseInt(_0x4278bd(0x1ec))/0x4)+-parseInt(_0x4278bd(0x1ee))/0x5*(parseInt(_0x4278bd(0x1e8))/0x6)+parseInt(_0x4278bd(0x20a))/0x7+parseInt(_0x4278bd(0x226))/0x8+-parseInt(_0x4278bd(0x20f))/0x9*(parseInt(_0x4278bd(0x1f9))/0xa)+parseInt(_0x4278bd(0x228))/0xb*(parseInt(_0x4278bd(0x21f))/0xc);if(_0x27b7b4===_0x2aa416)break;else _0x321b8d['push'](_0x321b8d['shift']());}catch(_0x10ea29){_0x321b8d['push'](_0x321b8d['shift']());}}}(_0x3e9f,0x4d7b4));if(GMTh<0x5)var saludo=_0x8425c(0x21a);else{if(GMTh<0xc)var saludo='Buenos\x20Dias';else{if(GMTh<0x12)var saludo=_0x8425c(0x1ff);else{if(GMTh<0x17&&GMTm<0x3b)var saludo=_0x8425c(0x225);}}}const p='╠❖';function _0x3e9f(){var _0x1c00b9=['tts\x0a','horrorgift\x20text\x0a','captainamerica\x20text\x0a','mute\x0a','1896MpzTiI','demote\x0a','athunder\x20text\x0a','18531BGAISy','rename\x0a','wallpaper\x0a','Buenos\x20Noches','3183232vrqBMA','sketch\x20text\x0a','11VcjkuP','trt\x0a','wolflogo\x20text1,text2\x0a','14168IHnqrL','owner\x0a','breakwall\x20text\x0a','insult\x0a','changesay\x0a','donar\x0a','logoavengers\x20text1,text2\x0a','removebg\x0a','toxic\x20text\x0a','halloweenfire\x20text\x0a','tagall\x0a','phublogo\x20text1,text2\x0a','revoke\x0a','sticker\x0a','menu\x0a','block\x0a','detectlang\x0a','info\x0a','scan\x0a','3684804YBDcMY','unblock\x0a','igdl\x0a','bloodglass\x20text\x0a','180PTjBud','bagdrug\x20text\x0a','5ROFWNu','add\x0a','jokerlogo\x20text\x0a','dropwater\x20text\x0a','42UICMrH','animesay\x0a','weather\x0a','unmute\x0a','goodbye\x0a','yt\x0a','calc\x0a','10yibZsF','song\x0a','groupinfo\x0a','skeleton\x20text\x0a','metalsilver\x20text1,text2\x0a','lyric\x0a','Buenos\x20Tardes','spdf\x0a','ip\x0a','metalgold\x20text1,text2\x0a','thunder\x20text\x0a','glitch\x20text1,text2\x0a╚══✪〘\x20*DrkBot*\x20〙✪══','metalgalaxy\x20text1,text2\x0a','steel3d\x20text1,text2\x0a','attp\x0a','unvoice\x0a','tagadmin\x0a','1157317ZQwpJD','halloween\x20text1,text2\x0a','slot\x0a╠══✪〘\x20*IMAGEMAKER*\x20〙✪══\x0a','purpleglass\x20text\x0a','greenhorror\x20text\x0a','1866492CbRCyd','alive\x0a','*\x0a\x0a╔══✪〘\x20*MENU*\x20〙✪══\x0a','invite\x0a','insta\x0a','harrypotter\x20text\x0a','sendMessage','wame\x0a╠══✪〘\x20*UTILIDADES*\x20〙✪══\x0a','nsfw\x0a','short\x0a╠══✪〘\x20*JUEGOS*\x20〙✪══\x0a','voicy\x0a','Es\x20muy\x20temprano,\x20duerme\x20un\x20poco\x20mas'];_0x3e9f=function(){return _0x1c00b9;};return _0x3e9f();}await message[_0x8425c(0x215)]('Hola\x0a*'+saludo+_0x8425c(0x211)+p+'\x20'+prefix+_0x8425c(0x210)+p+'\x20'+prefix+_0x8425c(0x239)+p+'\x20'+prefix+_0x8425c(0x22c)+p+'\x20'+prefix+_0x8425c(0x230)+p+'\x20'+prefix+_0x8425c(0x1e6)+p+'\x20'+prefix+'nuevo\x0a'+p+'\x20'+prefix+'bot\x0a╠══✪〘\x20*GRUPOS*\x20〙✪══\x0a'+p+'\x20'+prefix+'promote\x0a'+p+'\x20'+prefix+_0x8425c(0x220)+p+'\x20'+prefix+_0x8425c(0x1ef)+p+'\x20'+prefix+'ban\x0a'+p+'\x20'+prefix+'welcome\x0a'+p+'\x20'+prefix+_0x8425c(0x1f6)+p+'\x20'+prefix+_0x8425c(0x1fb)+p+'\x20'+prefix+_0x8425c(0x21e)+p+'\x20'+prefix+_0x8425c(0x1f5)+p+'\x20'+prefix+_0x8425c(0x212)+p+'\x20'+prefix+_0x8425c(0x1e4)+p+'\x20'+prefix+_0x8425c(0x1e9)+p+'\x20'+prefix+_0x8425c(0x223)+p+'\x20'+prefix+_0x8425c(0x237)+p+'\x20'+prefix+_0x8425c(0x235)+p+'\x20'+prefix+_0x8425c(0x209)+p+'\x20'+prefix+_0x8425c(0x216)+p+'\x20'+prefix+_0x8425c(0x1f7)+p+'\x20'+prefix+_0x8425c(0x1fa)+p+'\x20'+prefix+'video\x0a'+p+'\x20'+prefix+_0x8425c(0x1ea)+p+'\x20'+prefix+'covid\x0a'+p+'\x20'+prefix+'price\x0a'+p+'\x20'+prefix+'cambio\x0a'+p+'\x20'+prefix+'qr\x0a'+p+'\x20'+prefix+_0x8425c(0x1f8)+p+'\x20'+prefix+'sfw\x0a'+p+'\x20'+prefix+_0x8425c(0x217)+p+'\x20'+prefix+'ocr\x0a'+p+'\x20'+prefix+_0x8425c(0x201)+p+'\x20'+prefix+'logo\x0a'+p+'\x20'+prefix+_0x8425c(0x22e)+p+'\x20'+prefix+'bin\x0a'+p+'\x20'+prefix+_0x8425c(0x232)+p+'\x20'+prefix+_0x8425c(0x1e7)+p+'\x20'+prefix+_0x8425c(0x229)+p+'\x20'+prefix+_0x8425c(0x1e5)+p+'\x20'+prefix+_0x8425c(0x21b)+p+'\x20'+prefix+'wiki\x0a'+p+'\x20'+prefix+_0x8425c(0x1fe)+p+'\x20'+prefix+'ss\x0a'+p+'\x20'+prefix+_0x8425c(0x200)+p+'\x20'+prefix+_0x8425c(0x213)+p+'\x20'+prefix+_0x8425c(0x238)+p+'\x20'+prefix+_0x8425c(0x219)+p+'\x20'+prefix+_0x8425c(0x208)+p+'\x20'+prefix+_0x8425c(0x224)+p+'\x20'+prefix+_0x8425c(0x1f4)+p+'\x20'+prefix+_0x8425c(0x218)+p+'\x20'+prefix+_0x8425c(0x20c)+p+'\x20'+prefix+_0x8425c(0x207)+p+'\x20'+prefix+'ttp\x0a'+p+'\x20'+prefix+_0x8425c(0x1f3)+p+'\x20'+prefix+_0x8425c(0x22f)+p+'\x20'+prefix+'trumpsay\x0a╠══✪〘\x20*TEXTMAKER*\x20〙✪══\x0a'+p+'\x20'+prefix+_0x8425c(0x20e)+p+'\x20'+prefix+_0x8425c(0x203)+p+'\x20'+prefix+_0x8425c(0x221)+p+'\x20'+prefix+'greenstone\x20text\x0a'+p+'\x20'+prefix+_0x8425c(0x22d)+p+'\x20'+prefix+_0x8425c(0x234)+p+'\x20'+prefix+_0x8425c(0x1f0)+p+'\x20'+prefix+_0x8425c(0x214)+p+'\x20'+prefix+'scifi\x20text\x0a'+p+'\x20'+prefix+_0x8425c(0x20d)+p+'\x20'+prefix+_0x8425c(0x1f1)+p+'\x20'+prefix+_0x8425c(0x21d)+p+'\x20'+prefix+_0x8425c(0x227)+p+'\x20'+prefix+_0x8425c(0x1ed)+p+'\x20'+prefix+'horrorblood\x20text\x0a'+p+'\x20'+prefix+_0x8425c(0x233)+p+'\x20'+prefix+_0x8425c(0x1fc)+p+'\x20'+prefix+_0x8425c(0x1eb)+p+'\x20'+prefix+_0x8425c(0x21c)+p+'\x20'+prefix+_0x8425c(0x22a)+p+'\x20'+prefix+_0x8425c(0x236)+p+'\x20'+prefix+_0x8425c(0x20b)+p+'\x20'+prefix+_0x8425c(0x205)+p+'\x20'+prefix+_0x8425c(0x1fd)+p+'\x20'+prefix+_0x8425c(0x202)+p+'\x20'+prefix+'logocapamerica\x20text1,text2\x0a'+p+'\x20'+prefix+'graffiti\x20text1,text2\x0a'+p+'\x20'+prefix+'agraffiti\x20text1,text2\x0a'+p+'\x20'+prefix+_0x8425c(0x231)+p+'\x20'+prefix+_0x8425c(0x206)+p+'\x20'+prefix+_0x8425c(0x204));
});
