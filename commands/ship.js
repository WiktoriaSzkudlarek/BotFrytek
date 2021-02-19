function shipForever(list, message) {
  let ship1 = Math.floor(Math.random() * list.length);
  let ship2 = Math.floor(Math.random() * list.length);
  while(ship2 === ship1) {
    ship2 = Math.floor(Math.random() * list.length);
  }
  console.log(ship1+" "+ship2);

  message.channel.send("```Para: "+ list[ship1] + " + " + list[ship2] + "\n\n```");
  
  let noweImei1 = list[ship1].split(" ");
  let noweImei2 = list[ship2].split(" ");
    
  function uwuInator(statek1, statek2) {
    let owo = "";
    
    if (statek1.length === 1 && statek2.length === 1) { 
      owo = statek1[0].slice(0, Math.ceil(statek1[0].length/2)) + statek2[0].slice(Math.ceil(statek2[0].length/2), statek2[0].length) + " " + 
      statek2[0].slice(0, Math.ceil(statek2[0].length/2)) + statek1[0].slice(Math.ceil(statek1[0].length/2), statek1[0].length);
    } else if (statek1.length === 1) { 
      owo = statek1[0].slice(0, Math.ceil(statek1[0].length/2)) + statek2[0].slice(Math.ceil(statek2[0].length/2), statek2[0].length) + " " + 
      statek2[1].slice(0, Math.ceil(statek2[1].length/2)) + statek1[0].slice(Math.ceil(statek1[0].length/2), statek1[0].length);
    } else if (statek2.length === 1) { 
      owo = statek1[0].slice(0, Math.ceil(statek1[0].length/2)) + statek2[0].slice(Math.ceil(statek2[0].length/2), statek2[0].length) + " " + 
      statek2[0].slice(0, Math.ceil(statek2[0].length/2)) + statek1[1].slice(Math.ceil(statek1[1].length/2), statek1[1].length);
    } else {
      owo = statek1[0].slice(0, Math.ceil(statek1[0].length/2)) + statek2[0].slice(Math.ceil(statek2[0].length/2), statek2[0].length) + " " + 
      statek2[1].slice(0, Math.ceil(statek2[1].length/2)) + statek1[1].slice(Math.ceil(statek1[1].length/2), statek1[1].length);
    }
    return owo;
  }
    
//   let uwu = 
//     noweImei1[0].slice(0, Math.ceil(noweImei1[0].length/2)) + noweImei2[0].slice(Math.ceil(noweImei2[0].length/2), noweImei2[0].length) + " " + 
//     noweImei2[1].slice(0, Math.ceil(noweImei2[1].length/2)) + noweImei1[1].slice(Math.ceil(noweImei1[1].length/2), noweImei1[1].length);
  
  let uwu = uwuInator(noweImei1, noweImei2);
  console.log(uwu);
  
  message.channel.send("❤❤❤   " + uwu + "   ❤❤❤");
  
}

module.exports = {
  name: "ship",
  description: "parowanie dostępnych użytkowników ❤",
  execute(message) {
    let userList = message.guild.members.cache.map((user) => {
      if(user.nickname === null || user.nickname === undefined) {
        return user.user.username;
      }
      else return user.nickname;
    });
    shipForever(userList, message);
  }
}
