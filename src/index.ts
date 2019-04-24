import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import { IBotCommand } from "./api";

const client: Discord.Client = new Discord.Client();

let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`)

client.on("ready", () => {

    //let us know bot is on
    console.log("Hello There");
})
client.on("message", msg => {
    //ignore message if sent by bot
    if (msg.author.bot) { return; }
    //ignore messages that dont start with prefix
    if (!msg.content.startsWith(ConfigFile.config.prefix)) { return; }
    //handle
    handleCommand(msg);
})

function loadCommands(commandsPath: string) {
    //exit if no commands
    if (!ConfigFile.config || (ConfigFile.config.commands as string[]).length === 0) {
        return;
    }
    //loop through all commands in config
    for (const commandName of ConfigFile.config.commands as string[]) {
        const commandClass = require(`${commandsPath}/${commandName}`).default;

        const command = new commandClass() as IBotCommand;
        commands.push(command);
    }
}

async function handleCommand(msg: Discord.Message) {
    //split string into command and args
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
    let args = msg.content.split(" ").slice(1);
    //loop through loaded commands
    for (const commandClass of commands) {
        //can cause problems
        try {
            //check is commandClass is the right one
            if (!commandClass.isThisCommand(command)) {
                //goes to next iteration
                continue;
            }
            //pause for commands code
            await commandClass.runCommand(args, msg, client);
        }
        catch (exception) {
            //if error log exception
            console.log(exception);
        }
    }
}

client.login(ConfigFile.config.token);


