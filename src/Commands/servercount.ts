import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class servercount implements IBotCommand {
    private readonly _command = "servercount"
    help(): string {
        return ("Displays member count on server");
    }
    isThisCommand(command: string): boolean {
        return (command === this._command);
    }
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        let embed = new Discord.RichEmbed()
                    .setColor("RED")
                    .setTitle("Members on Server")
                    .setFooter("Hello There")
                    .addField("Server count: ", `${msgObject.guild.memberCount} members`);

        msgObject.channel.send(embed).catch(console.error);
        return;
    }
}