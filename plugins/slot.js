/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const Config = require('../config');

let wk = Config.WORKTYPE == 'public' ? false : true

DrkBox.addCommand({pattern: 'slot', fromMe: wk}, async (message, match) => {

a = '๐'
b = '๐'
c = '๐'
e = '๐'
f = '๐ฐ'
g = '๐ฅ'
pw = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck = pw[Math.floor(Math.random() * pw.length)]
pw1 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck1 = pw1[Math.floor(Math.random() * pw1.length)]
pw2 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck2 = pw2[Math.floor(Math.random() * pw2.length)]
pw3 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck3 = pw3[Math.floor(Math.random() * pw3.length)]
pw4 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck4 = pw4[Math.floor(Math.random() * pw4.length)]
pw5 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck5 = pw5[Math.floor(Math.random() * pw5.length)]
pw6 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck6 = pw6[Math.floor(Math.random() * pw6.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
pw8 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck8 = pw8[Math.floor(Math.random() * pw8.length)]
d = `โ โ  ${luck} โ  ${luck1} โ ${luck2}`
r = `โ โ  ${luck3} โ  ${luck4} โ ${luck5}`
k = `โ โ  ${luck6} โ  ${luck7} โ ${luck8}`
if (r == 'โ โ  ๐ฐ โ  ๐ฐ โ ๐ฐ'){
slt = `โ ๏น๏น๐บ๏น๏น๏น๐ป๏น๏น โ 
โญโโโผโฅ๐ธDrK๐นโโพโโโฎ
โฝ โโโโโโโโโโโโ โ
${d}
โ โโโโโโโโโโโโค โ
${r}
โ โโโโโโโโโโโโค โ
${k}
โฟ โโโโโโโโโโโโ โฟ
โฐโโจโ๐ฎ๐๐๐๐๐๐๐๐พ๐ฎโ โ โโฏ

*GANASTE*`
await message.client.sendMessage(message.jid, slt, MessageType.text)
} else {
slt = `โ ๏น๏น๐บ๏น๏น๏น๐ป๏น๏น โ 
โญโโโผโฅ๐ธBoT๐นโโพโโโฎ
โฝ โโโโโโโโโโโโ โ
${d}
โ โโโโโโโโโโโโค โ
${r}
โ โโโโโโโโโโโโค โ
${k}
โฟ โโโโโโโโโโโโ โฟ
โฐโโจโ๐ฎ๐๐๐๐๐๐๐๐พ๐ฎโ โ โโฏ

*SIGUE INTENTANDO*`
await message.client.sendMessage(message.jid, slt, MessageType.text)
}
})
