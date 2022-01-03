const Discord = require("discord.js")

require("dotenv").config()



const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
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

const welcomeChannelId = "927593965618876476"

client.on("guildMemberAdd", (member) => {
    
    member.guild.channels.cache.get(welcomeChannelId).send(`Welcome <@${member.id}> to the server!`)
})

client.login(process.env.TOKEN)
