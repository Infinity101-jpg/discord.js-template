const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is ready.')
})

bot.on('message', (message) => {
    let msg = message.content
    let cmd = message.content.substring(1)
    let pre = message.content[0]
    function ret(text) {message.channel.send(text)}

    if(pre === '.') {
        if(cmd === 'ping') {ret('pong')}
    }
})

bot.login('ODI3NDUzOTI2MDQ3MjE5NzQy.YGbQhQ.OeIL-zXRh9KDMNIIvf-doQrgrRM')
