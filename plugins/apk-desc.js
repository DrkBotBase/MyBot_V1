/* Copyright (C) 2021
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
DrkBot - Ian VanH
*/

const Config = require('../config');
const DrkBox = require('../events');
const { MessageType } = require('@adiwajshing/baileys');

let wk = Config.WORKTYPE == 'public' ? false : true

/*GAMES*/
DrkBox.addCommand({pattern: "game ?(.*)", fromMe: wk}, (async (message, match) => {
		if (match[1] === "1") {
			await message.sendMessage('š *1v1 Lol Mod* š\n##desc\nā ļø ##aviso\nš https://ouo.io/7rUiaB', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "2") {
			await message.sendMessage('š *Among Us Mod* š\n##desc\nā ļø ##aviso\nš https://ouo.io/0H2otFf', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "3") {
			await message.sendMessage('š *Archero* š\n##desc\nā ļø ##aviso\nš https://ouo.io/Ml6gGm', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "4") {
			await message.sendMessage('š *Battle Ops* š\n##desc\nā ļø ##aviso\nš https://ouo.io/gFxnTmM', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "5") {
			await message.sendMessage('š *Boom Karts* š\n##desc\nā ļø ##aviso\nš https://ouo.io/WYUio5', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "6") {
			await message.sendMessage('š *CSR Racing 2* š\n##desc\nā ļø ##aviso\nš https://ouo.io/pUFhf5', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "7") {
			await message.sendMessage('š *Death Target* š\n##desc\nā ļø ##aviso\nš https://ouo.io/8BYwIU', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "8") {
			await message.sendMessage('š *Dust Settle* š\n##desc\nā ļø ##aviso\nš https://ouo.io/BIDP93', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "9") {
			await message.sendMessage('š *Harry Poter (puzzles)* š\n##desc\nā ļø ##aviso\nš https://ouo.io/5Hb5HJ', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "10") {
			await message.sendMessage('š *Jetpack Joyride Mod* š\n##desc\nā ļø ##aviso\nš https://ouo.io/O8lnRe', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "11") {
			await message.sendMessage('š *Metal SLug (todos)* š\n##desc\nā ļø ##aviso\nš https://ouo.io/c5ekal', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "12") {
			await message.sendMessage('š *Minecraft Mod* š\n##desc\nā ļø ##aviso\nš https://ouo.io/AXAqB4', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "13") {
			await message.sendMessage('š *Plantas Vs Zombies Mod* š\n##desc\nā ļø ##aviso\nš https://ouo.io/wpC9IC', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "14") {
			await message.sendMessage('š *Sky Fighter* š\n##desc\nā ļø ##aviso\nš https://ouo.io/1A3Pay', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "15") {
			await message.sendMessage('š *Sniper 3D Mod* š\n##desc\nā ļø ##aviso\nš https://ouo.io/74OFrB', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "16") {
			await message.sendMessage('š *State Of Survival* š\n##desc\nā ļø ##aviso\nš https://ouo.io/zhe7dUr', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "17") {
			await message.sendMessage('š *Subway Surfer Mod* š\n##desc\nā ļø ##aviso\nš https://ouo.io/grcoQ7', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "18") {
			await message.sendMessage('š *WWE Undefeated* š\n##desc\nā ļø ##aviso\nš https://ouo.io/KZlvr9', MessageType.text, {quoted: message.data});
		}
}));

/*TOOLS*/
DrkBox.addCommand({pattern: "tool ?(.*)", fromMe: false}, (async (message, match) => {
	// Launcher
		if (match[1] === "1") {
			await message.sendMessage('š *Apex Launcher* š\n##desc\nā ļø ##aviso\nš https://ouo.io/gox6jm1', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "2") {
			await message.sendMessage('š *Blue IP (Icon Pack)* š\n##desc\nā ļø ##aviso\nš https://ouo.io/R0LIud', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "3") {
			await message.sendMessage('š *Nova Launcher* š\n##desc\nā ļø ##aviso\nš https://ouo.io/LmcuVB\nš https://ouo.io/lPr7K8h', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "4") {
			await message.sendMessage('š *Rugos (Icon Pack)* š\n##desc\nā ļø ##aviso\nš https://ouo.io/nJfdtO', MessageType.text, {quoted: message.data});
		}
	// Edicion
		else if (match[1] === "5") {
			await message.sendMessage('š *Canva Pro* š\n##desc\nā ļø ##aviso\nš https://ouo.io/8uJdMc', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "6") {
			await message.sendMessage('š *Kinemaster Mod* š\n##desc\nā ļø ##aviso\nš https://ouo.io/Mxwpb5', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "7") {
			await message.sendMessage('š *LightRoom Mod* š\n##desc\nā ļø ##aviso\nš https://ouo.io/pQAUuW', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "8") {
			await message.sendMessage('š *Photo Editor* š\n##desc\nā ļø ##aviso\nš https://ouo.io/amYqmP', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "9") {
			await message.sendMessage('š *Photoshop* š\n##desc\nā ļø ##aviso\nš https://ouo.io/uqanCd\nš https://ouo.io/9iU3re', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "10") {
			await message.sendMessage('š *Pics Art Mod* š\n##desc\nā ļø ##aviso\nš https://ouo.io/mKXyfQ', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "11") {
			await message.sendMessage('š *Retouch* š\n##desc\nā ļø ##aviso\nš https://ouo.io/w1RXvI', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "12") {
			await message.sendMessage('š *Snapseed* š\n##desc\nā ļø ##aviso\nš https://ouo.io/tfAal8d', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "13") {
			await message.sendMessage('š *Story Art* š\n##desc\nā ļø ##aviso\nš https://ouo.io/vL95Kmj', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "14") {
			await message.sendMessage('š *VivaCut Mod* š\n##desc\nā ļø ##aviso\nš https://ouo.io/tXTErv', MessageType.text, {quoted: message.data});
		}
	// Herramientas
		else if (match[1] === "15") {
			await message.sendMessage('š *Call Recorder Pro* š\n##desc\nā ļø ##aviso\nš https://ouo.io/NIPAuK', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "16") {
			await message.sendMessage('š *Down Acelerator Plus* š\n##desc\nā ļø ##aviso\nš https://ouo.io/j2BRYM', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "17") {
			await message.sendMessage('š *Drk-Calc (Calculator)* š\n##desc\nā ļø ##aviso\nš https://ouo.io/UcZRLu', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "18") {
			await message.sendMessage('š *Drk-Gen (CC-Gen)* š\n##desc\nā ļø ##aviso\nš https://ouo.io/i8vPWo', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "19") {
			await message.sendMessage('š *ES File* š\n##desc\nā ļø ##aviso\nš https://ouo.io/Lypo1d', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "20") {
			await message.sendMessage('š *Es File Mod* š\n##desc\nā ļø ##aviso\nš https://ouo.io/ZoCSLsV', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "21") {
			await message.sendMessage('š *Fing (Scaner Red)* š\n##desc\nā ļø ##aviso\nš https://ouo.io/rgLefX', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "22") {
			await message.sendMessage('š *Grabador Pantalla Pro* š\n##desc\nā ļø ##aviso\nš https://ouo.io/czYxpX', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "23") {
			await message.sendMessage('š *Photo Math Plus* š\n##desc\nā ļø ##aviso\nš https://ouo.io/wAXM1S', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "24") {
			await message.sendMessage('š *PowerAmp* š\n##desc\nā ļø ##aviso\nš https://ouo.io/V5rvEj9', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "25") {
			await message.sendMessage('š *QR Creator* š\n##desc\nā ļø ##aviso\nš https://ouo.io/xRPKvU', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "26") {
			await message.sendMessage('š *RAR* š\n##desc\nā ļø ##aviso\nš https://ouo.io/E4FsUY', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "27") {
			await message.sendMessage('š *Shazam* š\n##desc\nā ļø ##aviso\nš https://ouo.io/gy14l7', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "28") {
			await message.sendMessage('š *TeamViewer* š\n##desc\nā ļø ##aviso\nš https://ouo.io/N7Y7FB', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "29") {
			await message.sendMessage('š *True Caller* š\n##desc\nā ļø ##aviso\nš https://ouo.io/pxbEL2R', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "30") {
			await message.sendMessage('š *Vanced Manager* š\n##desc\nā ļø ##aviso\nš https://ouo.io/x1VmJ2', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "31") {
			await message.sendMessage('š *WebVideoCaster Mod* š\n##desc\nā ļø ##aviso\nš https://ouo.io/nMRzse', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "32") {
			await message.sendMessage('š *Whatsapp Mod* š\n##desc\nā ļø ##aviso\nš https://ouo.io/DAsHHV', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "33") {
			await message.sendMessage('š *Whatsapp Plus* š\n##desc\nā ļø ##aviso\nš https://ouo.io/b1cTjJ', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "34") {
			await message.sendMessage('š *Whatsapp Tool* š\n##desc\nā ļø ##aviso\nš https://ouo.io/LFu1Vp', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "35") {
			await message.sendMessage('š *WPS Office* š\n##desc\nā ļø ##aviso\nš https://ouo.io/SeFWPqH', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "36") {
			await message.sendMessage('š *Xender* š\n##desc\nā ļø ##aviso\nš https://ouo.io/JN9qUY', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "37") {
			await message.sendMessage('š *Z-Camera* š\n##desc\nā ļø ##aviso\nš https://ouo.io/BNhaHz', MessageType.text, {quoted: message.data});
		}
	// Multimedia
		else if (match[1] === "38") {
			await message.sendMessage('š *Corner Kick (TV Pro)* š\n##desc\nā ļø ##aviso\nš https://ouo.io/eNENWN', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "39") {
			await message.sendMessage('š *Deezer Mod* š\n##desc\nā ļø ##aviso\nš https://ouo.io/zI0X6S', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "40") {
			await message.sendMessage('š *eSound (Music Pro)* š\n##desc\nā ļø ##aviso\nš https://ouo.io/ydlxNb5', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "41") {
			await message.sendMessage('š *Freezer (Music Down)* š\n##desc\nā ļø ##aviso\nš https://ouo.io/ufEgM7', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "42") {
			await message.sendMessage('š *Fun Player (TV Pro)* š\n##desc\nā ļø ##aviso\nš https://ouo.io/lzZ4irb', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "43") {
			await message.sendMessage('š *Jet Audio* š\n##desc\nā ļø ##aviso\nš https://ouo.io/1PVitOz', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "44") {
			await message.sendMessage('š *Mx Player* š\n##desc\nā ļø ##aviso\nš https://ouo.io/hqGw0Ri', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "45") {
			await message.sendMessage('š *PlayHub+* š\n##desc\nā ļø ##aviso\nš https://ouo.io/B1sxFxl', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "46") {
			await message.sendMessage('š *Radio Box Pro* š\n##desc\nā ļø ##aviso\nš https://ouo.io/xcQoEL', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "47") {
			await message.sendMessage('š *TikTok Mod* š\n##desc\nā ļø ##aviso\nš https://ouo.io/hpF9Cow\nš https://ouo.io/3Rol8tf', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "48") {
			await message.sendMessage('š *TuneIn Mod* š\n##desc\nā ļø ##aviso\nš https://ouo.io/8miwQY', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "49") {
			await message.sendMessage('š *YMusic* š\n##desc\nā ļø ##aviso\nš https://ouo.io/PY3EMn', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "50") {
			await message.sendMessage('š *VLC Player* š\n##desc\nā ļø ##aviso\nš https://ouo.io/xTWMldE', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "51") {
			await message.sendMessage('š *Zedge Mod* š\n##desc\nā ļø ##aviso\nš https://ouo.io/WJiwWig', MessageType.text, {quoted: message.data});
		}
	// Vpn
		else if (match[1] === "52") {
			await message.sendMessage('š *AppGuard (VPN)* š\n##desc\nā ļø ##aviso\nš https://ouo.io/mqY0XGq', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "53") {
			await message.sendMessage('š *Hospot Shield* š\n##desc\nā ļø ##aviso\nš https://ouo.io/d6QPjwj', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "54") {
			await message.sendMessage('š *Psiphon* š\n##desc\nā ļø ##aviso\nš https://ouo.io/hgiFv2\nš https://ouo.io/eSzAHNp', MessageType.text, {quoted: message.data});
		}
		else if (match[1] === "55") {
			await message.sendMessage('š *VPN Hub* š\n##desc\nā ļø ##aviso\nš ##link', MessageType.text, {quoted: message.data});
		}
}));
