module.exports = {
  name: "clear",
  description: "P O T Ę Ż N E  N A R Z Ę D Z I E usuwa do 100 wiadomości",
  execute(message, args) {
    let number = parseInt(args[0]);
    if (typeof number === "number" && !isNaN(number)) {
      message.channel.bulkDelete(number).catch(console.error);
      
    } else {
      message.channel.send("Zły argument");
    }
  },
};
