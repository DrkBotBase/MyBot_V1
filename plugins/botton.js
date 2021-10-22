/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const DrkBox = require('../events')
const Config = require('../config');
const { MessageType } = require('@adiwajshing/baileys')

let wk = Config.WORKTYPE == 'public' ? false : true


/*################# BOTON #################*/
const button = async (teks,id1,id2 ,foots = 'DrkBot') => {
	let buttons = [
		{buttonId: 'id1', buttonText: {displayText: id1}, type: 1},
		{buttonId: 'id2', buttonText: {displayText: id2}, type: 1}
	]

	let buttonMessage = {
		contentText: teks,
		footerText: foots,
		buttons: buttons,
		headerType: 1
	}
	await message.sendMessage(buttonMessage, MessageType.buttonsMessage);
}
/*################# FIN #################*/

/*################# VCard #################*/
const vCard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Ian\n'
            + 'ORG:DrkBot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=573508770421:+57 350 877 0421\n'
            + 'END:VCARD'
/*################# FIN #################*/

/*################# MENSAJES #################*/
const commands = '┏━━━━━━━━━━━━━━━━━━━\n┃〘 *PRUEBA* 〙\n┗━━━━━━━━━━━━━━━━━━━\n\n┏━━━━━━━━━━━━━━━━━━━\n *𝐃𝐫𝐤𝐁𝐨𝐭* tu BOT amigo 😉\n┗━━━━━━━━━━━━━━━━━━━'

const dapdate = '┏━━━━━━━━━━\n┃〘 ☢️ *𝐃𝐫𝐤𝐁𝐨𝐭* ☢️ 〙\n┣━━━━━━━━━━\n┠ NUEVA ACTUALIZACIÓN\n┠⊷️ *Version:*  ```'+Config.VERSION+'```\n┠⊷️ *Prefix:*  『/』\n┗━━━━━━━━━━\n┃\n┠⊷️ *CAMBIOS*\n┏━━━━━━━━━━━━\n  */qr*\nObten un codigo QR de algún texto o enlace enviado.\n\n*/apkmod*\nActualización del menú de aplicaciones.\n\n*/vip*\nYa los admin de grupos pueden usar los comandos vip por medio del *BOT*, para eso *DrkBot* necesita ser admin de ese grupo.\n┗━━━━━━━━━━━━'
/*################# FIN #################*/


/*################# CHAT #################*/
DrkBox.addCommand({on: 'text', fromMe: wk, onlyGroup: true}, (async (message, match) => {
	if (message.message.includes('dbot1')) {
		button(commands,'OWNER','UPDATE')
	} else if (message.message.includes('OWNER')) {
		await message.sendMessage({displayname: "Ian", vcard: vCard}, MessageType.contact);
	}
	else if (message.message.includes('UPDATE')) {
		await message.sendMessage(dapdate, MessageType.text);
	}
}));
/*################# FIN #################*/
