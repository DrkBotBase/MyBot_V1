const DrkBox = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const { errorMessage } = require('../helpers')
const Config = require('../config');
const fs = require('fs');
const axios = requiere ('axios');
const FormData = require('form-data');

const iErr = '🤖 Parece que hay un error'



if (Config.WORKTYPE == 'private') {}

else if (Config.WORKTYPE == 'public') {

DrkBox.addCommand({pattern: 'shazam', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
        if (message.reply_message === false) return await message.sendMessage('*Need Audio!*');

        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

bodyForm = new FormData()
bodyForm.append('audio', fs.createReadStream(location));

await axios(`https://api.zeks.me/api/searchmusic?apikey=apivinz`, {
  method: 'POST',
  headers: {
    ...bodyForm.getHeaders()
  },
  data: bodyForm.getBuffer()
}).then(async ({data}) => {
	 if(response.status) {
	 	  await message.client.sendMessage(messaje.jid,
	 	    `✪〘 *DATOS ENCONTRADOS* 〙✪\n\n➡️ *Titulo:* ${data.data.title}\n➡️ *Artista:* ${data.data.artists}\n➡️ *Genero:* ${data.data.genre}\n➡️ *Album:* ${data.data.album}\n➡️ *Lanzamiento:* ${data.data.release_date}`, MessageType.text)
	 	}	 else {
	 		 await messaje.sendMessage(`${response.message}`, MessageType.text)
	 	}
}).catch (async (err) => {
     await message.sendMessage('🤖 Parece que tenemos un error!', MessageType.text)
});
}));

}
