const Discord = require('discord.js');
const discord_client = new Discord.Client();
const GoogleImages = require('google-images');


const image_client = new GoogleImages("your_cse_id","your_google_api")
const options = {page:1};


const config = { 
    "token"  : "your_discord_token",
    "prefix" : "!"
  }

discord_client.on('ready',() => {
    console.log('Bot is ready.')
});

discord_client.on('message', msg => {
   
    if(msg.content.startsWith(config.prefix) == false) 
        return;

   var args = msg.content.substring(0,msg.content.length).split(" ");
   console.log(args);
   var searchWord = "";

   if(args[0] == "!görsel"){
    for(var i = 1;i < args.length;i++){
     searchWord = searchWord +" " + args[i];
    }
    image_client.search(searchWord)
     .then(images => {
       
        msg.channel.send(images[0].url);

});
}
if(args[0] == "!görsel2"){
    for(var i = 1;i < args.length;i++){
     searchWord = searchWord +" " + args[i];
    }
    image_client.search(searchWord)
     .then(images => {
        msg.channel.send(images[1].url);
});
}
if(args[0] == "!görsel3"){
    for(var i = 1;i < args.length;i++){
     searchWord = searchWord +" " + args[i];
    }
    image_client.search(searchWord)
     .then(images => {
        msg.channel.send(images[2].url);
    
});
}
if(args[0] == "!görsel4"){
    for(var i = 1;i < args.length;i++){
     searchWord = searchWord +" " + args[i];
    }
    image_client.search(searchWord)
     .then(images => {
    msg.channel.send(images[3].url);
});
}
if(args[0] == "!görsel5"){
    for(var i = 1;i < args.length;i++){
     searchWord = searchWord +" " + args[i];
    }
    image_client.search(searchWord)
     .then(images => {
    msg.channel.send(images[4].url);
});
}
        
   
   

});





discord_client.login(config.token);

//image_client.search("semih özer")
//.then(images => {
//    msg.channel.send(images[1].url);
//});