const { MessageEmbed } = require ('discord.js');

module.exports = {  
    name: 'abouteng',
    description: 'dm komutu',
    execute(message, args, Discord){    
        const embed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('About Us')
        .addFields(
            {name: 'EmirBot', value: 'We are a little group that can make bots special for you. By giving very cheap prices around 3 euros, you can have your own all in one discord bot.'},
            {name: 'We could work together!', value: 'If you want to work with us, type !yes if you dont want to work with us, type !no (If bot doesnt say anything after saying yes, contact boi.#8185)'},
        )

        
    
    message.author.send(embed);
    }

}