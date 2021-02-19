const fs = require("fs");
const kek = require("../callendar.js");

module.exports = {
  name: "kalendarz",
  description: "wyświetla najbliższe wydarzenia",
  execute(message) {
    kek.authorizeAndSend((msg)=>{message.channel.send(msg)});
  }
}
