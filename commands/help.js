module.exports = {
  name: "help",
  description: "lista komend",
  execute(message, args) {
    if(!(args[0])) {
      message.channel.send(
        "```" +
          global.clientPtr.commands
            .map((command) => `${command.name} => ${command.description}`)
            .join("\n\n") +
          "```"
        );
    } else {
      message.channel.send(
        "```" +
          global.clientPtr.commands
            .filter((command) =>command.name === args[0])
            .map((command) => `${command.name} => ${command.description}`) +
          "```",
      );
    }
  },
};
