"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class servercount {
    constructor() {
        this._command = "servercount";
    }
    help() {
        return ("Displays member count on server");
    }
    isThisCommand(command) {
        return (command === this._command);
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let embed = new Discord.RichEmbed()
                .setColor("RED")
                .setTitle("Members on Server")
                .setFooter("Hello There")
                .addField("Server count: ", `${msgObject.guild.memberCount} members`);
            msgObject.channel.send(embed).catch(console.error);
            return;
        });
    }
}
exports.default = servercount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyY291bnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29tbWFuZHMvc2VydmVyY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUd0QyxNQUFxQixXQUFXO0lBQWhDO1FBQ3FCLGFBQVEsR0FBRyxhQUFhLENBQUE7SUFrQjdDLENBQUM7SUFqQkcsSUFBSTtRQUNBLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0ssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ3RCLFFBQVEsQ0FBQyxLQUFLLENBQUM7aUJBQ2YsUUFBUSxDQUFDLG1CQUFtQixDQUFDO2lCQUM3QixTQUFTLENBQUMsYUFBYSxDQUFDO2lCQUN4QixRQUFRLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsVUFBVSxDQUFDLENBQUM7WUFFbEYsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuRCxPQUFPO1FBQ1gsQ0FBQztLQUFBO0NBQ0o7QUFuQkQsOEJBbUJDIn0=