/*

   # MADE BY Juxyiko
   ## FOR HELP CONTACT ME ON Facebook
   ## Contact    [ Facebook: http://www.facebook.com/Juxyiko ]
*/
const { Schema, model } = require("mongoose");

const musicbot = Schema({
  guildID: String,
  role: String,
  language: String,
  channels: Array,
});


const playlist = Schema({
  userID: String,
  playlist: Array,
  musics: Array,
});


module.exports = {
  musicbot: model("musicbot", musicbot),
  playlist: model("playlist", playlist)
};
/*

   # MADE BY Juxyiko
   ## FOR HELP CONTACT ME ON Facebook
   ## Contact    [ Facebook: http://www.facebook.com/Juxyiko ]
*/