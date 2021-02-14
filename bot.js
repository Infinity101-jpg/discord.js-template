const discord = require('discord.js');
const bot = new discord.Client();
bot.login("Nzk3NTIzMDUwODE1NTUzNTY3.X_ntOA.5ZiatV1V_5lhPArKwFTKYcZTmkU");


function Bot() {

    bot.once('ready', () => {
        console.log("Bot Is Ready.");
    });

    bot.on('message', (message) => {

        let m = message.content.split(";")
        let cmd = m[1]

        function send(msg) {
            message.channel.send(msg)
        }

        if(message.content.startsWith(";")) {


            function command() {

                if(cmd === "") {
                    return "Please Send A Valid Command."
                }

                if(cmd === "ping") {
                    return "pong!"
                }

            };

            console.log(command())
            send(command())

        };

    });
    
};

Bot()
