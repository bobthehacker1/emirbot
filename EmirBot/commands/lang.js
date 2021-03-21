const { MessageEmbed } = require ('discord.js');

module.exports = {  
    name: 'lang',
    description: 'dil seçme',
    execute(message, args, Discord){    
        const embed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .addFields(
            {name: 'Laungage', value: 'Type !eng for English, Türkçe için !tr yazın.'},
        )

        
    
    message.author.send(embed);
    }

}