const Discord = require("discord.js")

require("dotenv").config()



const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready",() => {
    console.log(`logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if(message.content == "Hi"){
        message.reply("Laffey Halo!")
    }
    if(message.content == "hi"){
        message.reply("Laffey Halo!")
    }
} )

client.login(process.env.TOKEN)