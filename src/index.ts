import * as Discord from "discord.js";
import * as ConfigFile from "./config";

const client: Discord.Client = new Discord.Client();

client.on("ready", () => {

    //let us know bot is on
    console.log("Hello There");
})
client.on("message", msg => {
    //ignore message if sent by bot
    if (msg.author.bot) { return; }
    //ignore messages that dont start with prefix
    if (!msg.content.startsWith(ConfigFile.config.prefix)) { return; }
    msg.channel.send(`${msg.author.username} Hello There!`)
})
client.login(ConfigFile.config.token);


