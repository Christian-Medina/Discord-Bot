import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class purge implements IBotCommand {
    private readonly _command = "purge"
    help(): string {
        return ("(Admin only) Deletes the desired number of messages from the channel within 14 days");
    }
    isThisCommand(command: string): boolean {
        return (command === this._command);
    }
    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        //clean up our message
        msgObject.delete(0).catch(console.error);
        //check if admin
        if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`Sorry ${msgObject.author.username} but this command is only for admins`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000).catch(console.error);
                });
            return;
        }
        //check number of messages
        if (!args[0]) {
            msgObject.channel.send(`Sorry ${msgObject.author.username} but you must give a valid number of messages`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000).catch(console.error);
                });
            return;
        }
        let numberOfMessagesToDelete = Number(args[0]);
        //make sure input is a number
        if (isNaN(numberOfMessagesToDelete)) {
            msgObject.channel.send(`Sorry ${msgObject.author.username} but you must give a valid number`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000).catch(console.error);
                });
        }
        //makes sure it is an integer
        numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete + 1);
        //delete desired messages
        msgObject.channel.bulkDelete(numberOfMessagesToDelete)
            .catch(console.error);
    }
}