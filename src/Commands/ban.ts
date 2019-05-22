import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class ban implements IBotCommand {
    private readonly _command = "ban"
    help(): string {
        return ("(Admin only) Bans mentioned user");
    }
    isThisCommand(command: string): boolean {
        return (command === this._command);
    }
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        //checks if working
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let banLog = `${msgObject.author.username}: ${suppliedReason}`;

        msgObject.delete(0).catch(console.error);
        //check if admin
        if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`Sorry ${msgObject.author.username} but this command is only for admins`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000).catch(console.error);
                });
            return;
        }
        if (!mentionedUser) {
            msgObject.channel.send(`Sorry ${msgObject.author.username}, could not find user`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000).catch(console.error);
                });
            return;
        }

        msgObject.guild.member(mentionedUser).ban(banLog)
            .then(console.log)
            .catch(console.error);
    }
}