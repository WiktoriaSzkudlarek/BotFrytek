const request = require("request");

module.exports = {
  name: "nudesy",
  description: "nudesy dla studentów wydziału WEEIA",
  execute(message) {
    message.channel.send("WEEIA dla geja");
    request({url: "https://meme-api.herokuapp.com/gimme/gaymersgonewild"}, (error,respons,body)=>{
      if(error) console.log(i);
      data = JSON.parse(body);
      message.channel.send(data.url);
    });
  }
}
