const discord = require('discord.js');
const bot = new discord.Client();
bot.login("Nzk3NTIzMDUwODE1NTUzNTY3.X_ntOA.TioGBk-YxSskl50dH06j4jtQ5UE");


function Bot() {

    function OnReady() {
        bot.once('ready', (ready) => {
            console.log("Bot Is Ready.")
        })
    }

    function CommandHandler() {
        bot.once('message', (message) => {
            let cmd = message.content.substring(1);

            function ret(msg) {
                message.channel.send(msg)
            }

            function ErrorHandler() {
                if(cmd === "") {
                    ret("Please Enter A Valid Command.")
                }
            }

            ////////////////////////////////////////////////////////

            function ping() {
                if(cmd === "ping") {
                    ret("Pong!")
                }
            }

            ping()
            ErrorHandler()

        });
    };

    OnReady()
    CommandHandler()

};

Bot()
