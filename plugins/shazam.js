const DrkBox = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const ffmpeg = require('fluent-ffmpeg');

const Language = require('../language');
const bix = Language.getString('unvoice')

const Ierr = "*Necesitas contestar el archivo de audio!*"


//============================== audd ==============================
var request = require("request");
var axios = require("axios");
var fs = require('fs');


if (Config.WORKTYPE == 'private') {

    DrkBox.addCommand({pattern: 'recona', fromMe: true}, (async (message, match) => {

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, bix.UV_REPLY, MessageType.text);

        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
        .format('mp3')
        .save('lyr.mp3')
        .on('end', async () => {

            var data = { 'api_token': 'c60a989e5dbe5a900c81eaff534074a2', 'file': fs.createReadStream('lyr.mp3'), 'return': 'apple_music,spotify' };
            request ({ uri: 'https://api.audd.io/', form: data, method: "POST" }, async (err, res, body) => {
                return await message.client.sendMessage(message.jid, body, MessageType.text);
            })
        })

    }));

    DrkBox.addCommand({pattern: 'reconb', fromMe: true}, (async (message, match) => {

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, bix.UV_REPLY, MessageType.text);

        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
        .format('mp3')
        .save('lyr.mp3')
        .on('end', async () => {
            var data = { 'file': fs.createReadStream('lyr.mp3'), 'return': 'title,artists' };
            request ({ url: 'https://api.zeks.me/api/searchmusic?apikey=apivinz&audio=', form: data, method: "POST" }, async (err, res, body) => {
                return await message.client.sendMessage(message.jid, body, MessageType.text);
            })
        });

    }));

}

else if (Config.WORKTYPE == 'public') {}
