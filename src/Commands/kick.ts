import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class kick implements IBotCommand {
    private readonly _command = "kick"
    help(): string {
        return ("Kicks mentioned user");
    }
    isThisCommand(command: string): boolean {
        return (command === this._command);
    }
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        //checks if working
        let mentionedUser=msgObject.mentions.users.first();
        let suppliedReason=args.slice(1).join(" ") || "";
        let kickLog=`${msgObject.author.username}: ${suppliedReason}`;
        
        msgObject.delete(0);
        if(!msgObject.member.hasPermission("ADMINISTRATOR"))
        {
            msgObject.channel.send(`Nice try ${msgObject.author.username}, you don't have access to that`);
            return;
        }
        if(!mentionedUser)
        {
            msgObject.channel.send(`Sorry ${msgObject.author.username}, could not find user`);
            return;
        }
        
        msgObject.guild.member(mentionedUser).kick(kickLog)
            .then(console.log)
            .catch(console.error);
    }
}