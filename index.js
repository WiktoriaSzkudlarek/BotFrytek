//moduł do zarządzania plikami
const fs = require("fs");
const Discord = require("discord.js");
const {prefix, token} = require("./config.json");
const config = require("./config.json");
const client = new Discord.Client();
client.commands = new Discord.Collection();
global.clientPtr = client;
var cron = require('node-cron');


const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
    
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Ready!");
});



client.on("message", message => { 
    
  //elektronikowanie
  if (message.content.toLowerCase().indexOf("nie wiem") !== -1 || message.content.toLowerCase().indexOf("niewiem") !== -1)
    return message.reply("Jesteś elektronikiem i powinieneś wiedzieć takie rzeczy!");
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;
          
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) {
      message.reply("Nie ma takich frytek :<");
      return;
  }
    
  try {
      client.commands.get(command).execute(message, args);
  } catch (error) {
      console.log(error);
      try {
        client.commands.get(command).execute(message);
      } catch (error) {
        console.log(error);
        message.reply("Błąd komendy");
      }
  }

  
});

const kek = require("./callendar.js");

//wyświetlanie wydarzeń w niedzielę o 15
cron.schedule("0 15 * 1-6,9-12 0", () => {
  kek.authorizeAndSend((msg)=>{
    client.channels.cache
      .get("CHANNEL_ID")
      .send(msg)});
});

client.login("BOT_TOKEN");
