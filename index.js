const Discord = require("discord.js");
const YTDL = require("ytdl-core");

const TOKEN = "Imput token here"
const PREFIX = "?"
//Project is finnished. No further updates.
//Created and programed by InstaLight


var fourtunes = [
    "Yes",
    "No",
    "Maybe",
];

var bot = new Discord.Client();

bot.on("ready", function() {
console.log("Ready");
bot.user.setGame("in bed with Junkrat")

});


var bot = new Discord.Client();
var servers = {};

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
    if(server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

bot.on ("message", function (message) {
if (message.author.equals(bot.user)) return;

if (!message.content.startsWith(PREFIX)) return;

var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLocaleLowerCase()) {
case "ping":
message.channel.send("Pong");
break;
case "info":
message.channel.send("Hi I'm RoadBog! One sec, Junkrat is sucking my dick right now! Any way Ima very special bot created by InstaLight for this server to enjoy!");
break;
case "8ball":
if (args[1]) message.channel.send(fourtunes[Math.floor(Math.random() * fourtunes.length)]);
else message.channel.send("Couldn't read that, try again");
    break;

    case "embed":
var embed = new Discord.RichEmbed()
.addField("Test title 2", "Test description", true)
.addField("Test title 2", "Test description", true)
.addField("Test title 3", "Test description")
message.channel.sendEmbed(embed);
break;

case "help":
message.channel.send("Here are my commands!")
message.channel.send("1.ping - replys with pong")
message.channel.send("2.8ball - ask it something!")
message.channel.send("3.info -  tells you about the bot!")
message.channel.send("4.play - use the play command with a youtube link in a voice channel to play music")
message.channel.send("5.changelog - shows you verson and what was added and or patched")
message.channel.send("How to use commands - use ! and then put in command")
break;

case "test":
message.channel.send("Roadbog is switched on!");
break;

case "play":
if (!args[1]) {
    message.channel.send("Please provide a link");
    return
}

if(!message.member.voiceChannel) {
     message.channel.send("You must be in a voice channel");
    return
}

if (!servers[message.guild.id]) servers[message.guild.id] = {
queue: []
};

var server = servers[message.guild.id];

server.queue.push(args[1]);

if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
play(connection, message); 
});
break;

case "skip":
var server = servers[message.guild.id];
        
    case "important":
        message.channel.send("Project is finished.")

if (server.dispatcher) server.dispatcher.end();
break;
case "stop":
var server = servers[message.guild.id];


if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
break;

case "changelog":
message.channel.send("RoadBog v1.1.1")
message.channel.send("-Made help command look nicer")
message.channel.send("-Added changelog command")
message.channel.send("-Updated help command")
        message.channel.send("-Project is finished. No further updates :(.")
break;


exports.info = {
    name: 'shoot',
    usage: 'shoot <user>',
    description: 'Shoots yer friendz!'
};

default:
message.channel.send("You fucking retard, thats not a command!");
}
});

bot.login(TOKEN);

