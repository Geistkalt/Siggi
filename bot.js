require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
const PREFIX = process.env.PREFIX;
client.login(process.env.BOT_TOKEN);

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.id === '903934968177233930');
  if (!channel) return;
  channel.send(`Welcome ${member} ist gerade gespawnt auf TEST TEST TEST . Muahahaha LG.: <@903948564370186300> `);
  });

client.on('ready', () => {
  console.log(`${client.user.tag}has logged in.`);
});

const isValidCommand = (message, cmdName) => message.content.toLowerCase().startsWith(PREFIX + cmdName);
const rollDice = () => Math.floor(Math.random() * 6) + 1;
const checkPermissionRole = (role) => role.permission.has('ADMINISTRATOR') || role.permission.has('KICK_MEMBERS') || role.permission.has('BAN_MEMBERS')|| role.permission.has('MANAGE_GUILD') || role.permission.has('MANAGE_CHANNELS');

client.on('message', function(message) {
    if(message.author.bot) return;
    if(isValidCommand(message, "ping"))
        message.reply("pong! Websocket: 1ms | Average Websocket: 2ms");
    if(message.author.bot) return;
    if(isValidCommand(message, "hallo"))
        message.reply("Hello World");
    if(message.author.bot) return;
    if(isValidCommand(message, "help"))
        message.reply("Dir ist nicht mehr zu helfen: https://www.telefonseelsorge.de/");
        if(message.author.bot) return;
    if(isValidCommand(message, "pve"))
        message.reply("PvE in this game is great but PvP is a joke!");
        if(message.author.bot) return;
    if(isValidCommand(message, "pvp"))
        message.reply("You are a joke if you take pvp seriously in this game!");
        if(message.author.bot) return;
    if(isValidCommand(message, "daily"))
        message.reply("Der Tag hat 86.400 Sekunden!");
        if(message.author.bot) return;
    if(isValidCommand(message, "weekly"))
        message.reply("Die Woche hat 604.800 Sekunden!");
        if(message.author.bot) return;
    if(isValidCommand(message, "xur"))
        message.reply("Xur hat seinen Vorrat an Klopapier schon aufgebraucht, aber er hat Katzenstreu für dich!");
       if(message.author.bot) return;
    if(isValidCommand(message, "pop"))
        message.reply("Top POP Songs 2020 https://www.youtube.com/watch?v=zQpO0fIJNds");
        if(message.author.bot) return;
    if(isValidCommand(message, "commands"))
        message.reply("[ !hello !hi !ho !ping !hallo !help !pve !pvp !daily !weekly !xur !rank]");
        if(message.author.bot) return;
    if(isValidCommand(message, "selfrole"))
        message.reply("In <#712451897373753457> kannst du dich selbst mit Rollen versorgen, bitte sei so fair und geb dir insbesondere für die Destiny 2 Siegel nur die Rollen, die dir wirklich zustehen und nicht die, welche du gerne mal haben willst. Die Spieltyp-Rollen sind für dich wichtig, wenn du z.B. nur für Schmelztiegel angepingt werden möchtest, weil du z.B. keine Raids spielst usw. ... . Hier werden nach und nach weitere Rollen erscheinen, schau ab und zu mal herein.");
      


    else if(isValidCommand(message, "rolldice"))
        message.reply("rolled a " + rollDice());
        else if(isValidCommand(message, "add")) {
          let args = message.content.toLowerCase().substring(5);
          let roleNames = args.split(", ");
          let roleSet = new Set(roleNames);
          let { cache } =message.guild.roles;
          
          roleSet.forEach(roleName => {
              let role = cache.find(role => role.name.toLowerCase() === roleName);
              if(role) {
                  if(message.member.roles.cache.has(role.id)) {
                      message.channel.send("You already have this role!");
                  }
                  if(checkPermissionRole(role)) {
                    message.channel.send("You cannot add yourself to this role.");
                  }
                  else {
                      message.member.roles.add(role)
                          .then(member => message.channel.send("You were added to this role!"))
                          .catch(err => {
                              console.log(err);
                              message.channel.send("Something went wrong...");
                          });
                  }
              }
              else {
                  message.channel.send("Role not found!");
              }
         });
    }
    else if(isValidCommand(message, "del")) {
        let args = message.content.toLowerCase().substring(5);
        let roleNames = args.split(", ");
        let roleSet = new Set(roleNames);
        let { cache } = message.guild.roles;
        roleSet.forEach(roleName => {
            let role = cache.find(role => role.name.toLowerCase() === roleName);
            if(role) {
                if(message.member.roles.cache.has(role.id)) {
                    message.member.roles.remove(role)
                        .then(member => message.channel.send("You were removed to this role!"))
                        .catch(err => {
                            console.log(err);
                            message.channel.send("Something went wrong...");
                        });

                }
            }
            else {
                message-channel.send("Role not found");
            }
        });
    }
   else if(isValidCommand(message, "embed")) {
        let embedContent = message.content.substring(7);
        let embed = new discord.MessageEmbed();
        embed.setDescription(embedContent);
        embed.setColor('#ff4a00');
        embed.setTitle("ROLEMANAGER");
        embed.setThumbnail('https://cdn.discordapp.com/attachments/903951432607215636/903982771012247623/458022a7-edd0-4375-a9e5-9670686409b7-profile_image-70x70.png');
        embed.setTimestamp();
        embed.setFooter('Kämpfe für deine Ziele, und gebe niemals auf', 'https://cdn.discordapp.com/avatars/471083551396331565/ed05901800767f61c95ad5a3de330e9e.png');
        message.channel.send(embed);
    }
  });
client.on('ready', () => {
   
    client.user.setActivity('probier +help', { type: 'PLAYING'}).catch(console.error);
    setInterval(function() {

        
    }, 5000);
});
