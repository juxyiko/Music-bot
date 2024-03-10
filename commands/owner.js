/*

   # MADE BY Juxyiko
   ## FOR HELP CONTACT ME ON Facebook
   ## Contact    [ Facebook: http://www.facebook.com/Juxyiko ]
*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

module.exports = {
  name: "owner",
  description: "Get information about bot owner.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const FacebookLink = 'http://www.facebook.com/Juxyiko';
      const InstagramLink = 'https://www.instagram.com/juxyiko/';
      const { EmbedBuilder } = require('discord.js')
        const embed = new EmbedBuilder()
            .setColor('#da2a41')
            .setAuthor({
          name: 'Owner',
          iconURL: ''
        })
            .setDescription(`__**About me**__:\n\n ▶️ Myself Juxyiko. I am a discord bot developer and web developer. I love playing games, watching anime and building different webserver applications. You will get faster replies on instagram than other social media. Feel free to contact me!\n Facebook : ❤️ [Juxyiko](${FacebookLink})\n Instagram : 💙 [juxyiko](${InstagramLink})`)
            .setTimestamp();
      interaction.reply({ embeds: [embed] }).catch(e => {});

    } catch (e) {
    console.error(e); 
  }
  },
};
/*

   # MADE BY Juxyiko
   ## FOR HELP CONTACT ME ON Facebook
   ## Contact    [ Facebook: http://www.facebook.com/Juxyiko ]
*/