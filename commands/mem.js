const request = require("request");

let url = [
      "https://meme-api.herokuapp.com/gimme/LinuxMasterRace",
      "https://meme-api.herokuapp.com/gimme/AyyMD",
      "https://meme-api.herokuapp.com/gimme/LinusTechTips",
      "https://meme-api.herokuapp.com/gimme/linuxmemes",
      "https://meme-api.herokuapp.com/gimme/ProgrammersJokes",
      "https://meme-api.herokuapp.com/gimme/dankmemes",
      "https://meme-api.herokuapp.com/gimme/VR_memes",
      "https://meme-api.herokuapp.com/gimme/WTFwish",
      "https://meme-api.herokuapp.com/gimme/holdup",
      "https://meme-api.herokuapp.com/gimme/suddenlygay",
      "https://meme-api.herokuapp.com/gimme/pornhubcomments",
      "https://meme-api.herokuapp.com/gimme/bikinibottomtwitter",
      "https://meme-api.herokuapp.com/gimme/okbuddyretart",
      "https://meme-api.herokuapp.com/gimme/okkolegauposledzony",
      "https://meme-api.herokuapp.com/gimme/Animemes",
      "https://meme-api.herokuapp.com/gimme/fakehistoryporn",
      "https://meme-api.herokuapp.com/gimme/goodfaketexts",
      "https://meme-api.herokuapp.com/gimme/linuslore",
      "https://meme-api.herokuapp.com/gimme/notmyjob",
      "https://meme-api.herokuapp.com/gimme/loremipsum",
      "https://meme-api.herokuapp.com/gimme/theyknew",
      "https://meme-api.herokuapp.com/gimme/youngpeopleyoutube",
    ];
    
module.exports = {
  name: "mem",
  description: "fajne normickie memy",
  execute(message) {
    request(
      {url: url[Math.round(Math.random() * url.length)]},
      (error,respons,body)=>{
        if(error) console.log(i);
        data = JSON.parse(body);
        
        message.channel.send(data.title);
        message.channel.send(data.url);
      });
  }
}
