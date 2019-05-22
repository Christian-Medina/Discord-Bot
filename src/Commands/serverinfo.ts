import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class serverinfo implements IBotCommand {
    private readonly _command = "serverinfo"
    help(): string {
        return ("Displays server information");
    }
    isThisCommand(command: string): boolean {
        return (command === this._command);
    }
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
        let embed = new Discord.RichEmbed()
                        .setColor("RED")
                        .setTitle("Server Info")
                        .setFooter("Hello There")
                        .setImage(msgObject.guild.iconURL)
                        .setDescription("Literally just don't be a RETARD");

        msgObject.channel.send(embed).catch(console.error);
        return;
    }
}