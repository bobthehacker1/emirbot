const { MessageEmbed } = require ('discord.js');

module.exports = {  
    name: 'about',
    description: 'dm komutu',
    execute(message, args, Discord){    
        const embed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Hakkımızda')
        .addFields(
            {name: 'EmirBot', value: 'Kişiye ve sunucuya özel botlar geliştiren küçük bir grubuz. Çok makul bir fiyata yüzlerce satır kod yazarak all in one discord botları yapabiliyoruz.'},
            {name: 'Beraber çalışabiliriz!', value: 'Bizimle çalışmak istiyorsanız !evet istemiyorsanız !hayır yazın. (Evet yazdıktan sonra geri dönüş alamazsanız lütfen boi.#8185 ile iletişime geçin.)'},
        )

        
    
    message.author.send(embed);
    }

}