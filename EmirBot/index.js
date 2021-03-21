const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '!';

const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('EmirBot is ready to make money!');
    client.user.setActivity('!dm for more.');
});

client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const { author } = message
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'dm'){
  client.commands.get('lang').execute(message, args, Discord);
    }
    if(command === 'tr'){
        client.commands.get('about').execute(message, args, Discord);
}
        if(command === 'evet'){
    console.log('AUTHOR', author)
    client.on('guildMember', guildMember =>{
        let welcomeRole = guildMember.guild.roles.cache.get('797365943050567711');
     
        guildMember.roles.add(welcomeRole);
    });
    const channel01 = client.channels.cache.find(channel => channel.id === "797338148417437696");
    channel01.send('----------------------------')
    channel01.send(`Username: ${message.author.username}#${message.author.discriminator}`);
    channel01.send(`Id: ${message.author.id}`);

    message.channel.send('https://media1.giphy.com/media/lPG6wNE7MZj3ttYsM9/giphy.gif')
    message.channel.send('Bizi seçtiğiniz için teşekkür ederiz! En yakın zamanda geliştiricilerden biri size dönecek!')
        }
        if(command === 'hayır'){  
    message.channel.send('https://i.gifer.com/origin/f0/f04bf531d96ffb3bea130a8ac98f42e0_w200.gif')
    message.channel.send('Fikrinizi değiştirirseniz !evet yazmanız yeterli!')
} 

      
      if(command === 'eng'){
        client.commands.get('abouteng').execute(message, args, Discord);
     }
      if(command === 'yes'){
    console.log('AUTHOR', author)
    client.on('guildMember', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.get('797365943050567711');
             
    guildMember.roles.add(welcomeRole);
});
    const channel01 = client.channels.cache.find(channel => channel.id === "797338148417437696");
    channel01.send('----------------------------')
    channel01.send(`Username: ${message.author.username}#${message.author.discriminator}`);
    channel01.send(`Id: ${message.author.id}`);
    console.log('AUTHOR', author)
    message.channel.send('https://media1.giphy.com/media/lPG6wNE7MZj3ttYsM9/giphy.gif')
    message.channel.send('Thanks for choosing us! A developer will message you ASAP.')
    }
          if(command === 'no'){
    message.channel.send('https://i.gifer.com/origin/f0/f04bf531d96ffb3bea130a8ac98f42e0_w200.gif')
    message.channel.send('Bye for now! Would love to see you again!')
} 
});

client.login('Nzk3MTg2NzE1NzI2MzgxMTA2.X_iz_A.fTaEzhKWgdC7G3XbU6QWtFVAOB0');