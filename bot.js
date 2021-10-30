require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
const PREFIX = process.env.PREFIX;
client.login(process.env.BOT_TOKEN);

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.id === '712451929829015612');
  if (!channel) return;
  channel.send(`Willkommen ${member} auf DuckArmy©, unseren leicht gepimpten Destiny 2 - [Gaming - Chat & LFG] - Discord-Clan-Server für alle abgeduckten DuckArmy© Member. Im Moment befinden wir uns in Season 13. LG.: <@706757822381031494> `);
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
        embed.setDescription('CLANMOTTO');
        embed.setColor('#cef8ff');
        embed.setTitle('DuckArmy:copyright:');
        embed.setURL('https://www.bungie.net/de/ClanV2?groupid=3653189');
        embed.setThumbnail('https://cdn.discordapp.com/attachments/708016375892803745/713280491557486643/du1500.png');
        embed.addFields(
                { name: '"You wont achieve anything here without team spirit."', value: 'Du bist auf der suche nach einem Destiny 2 Clan und bist im Besitz einer minimalen geistigen Reife, die dir sogar ermöglicht dich den anderen Clanmates gegenüber vorzustellen oder zumindest regelmäßig im Clanchat Hallo zu sagen? Toll, dann bist du da oben weiter entwickelt als die meisten Chaoten die bisher durchgewunken wurden und sich irgendwann gefragt haben warum sie nicht mehr im Clan sind. Du erfüllst also schonmal unsere wichtigste Anforderung an dich. Wenn du Neugierig oder Lebensmüde bist, findest du weitere Infos in den folgenden Angaben... LG.: <@706757822381031494>' },
        { name: '\u200B', value: '\u200B' },
        { name: 'D2_CROSSSAVEGYM:copyright:', value: 'https://discord.gg/y7w6pmgUGs', inline: true },
        { name: 'DUCKARMY:copyright:', value: 'https://www.bungie.net/de/ClanV2?groupid=3653189', inline: true },
    )
        embed.addField('Clananfragen',  'richtest du bitte an <@620306072174854155>', true);
        embed.setImage('https://cdn.discordapp.com/attachments/708016375892803745/708026854186942564/index.png');
        embed.setTimestamp();
        embed.setFooter('And the Duckness comes over you', 'https://cdn.discordapp.com/attachments/697303546076332063/707588930677243914/crosssave.png');
        
        
        message.channel.send(embed);
    }
  });
client.on('ready', () => {
   
    client.user.setActivity('Duck Duck ?help', { type: 'PLAYING'}).catch(console.error);
    setInterval(function() {

        
    }, 5000);
});
