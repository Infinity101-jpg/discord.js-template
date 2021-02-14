
const discord = require('discord.js');
const bot = new discord.Client();
bot.login("token here")

// command handler
function CommandHandler() {
    bot.on('message', (message) => {

        let cmd = message.content.substring(1);
        let msg = message.content
        function ret(val) {message.channel.send(val)}

        if(msg.startsWith(";")) {
            // error handler
            if(cmd === "") {
                ret("Please Enter A Valid Command!");
            }

            //help command
            if(cmd === "ping") {
                ret("pong!")
            }

        }

    })
}

CommandHandler()
