const status = "AUTOMATIC";
const botName = "🎸 MUSIC BOT";
const rtxText = "Juxyiko";
const version = "Latest@ v3.6"; 
const startTime = Date.now();

function printWatermark() {
  const uptimeInSeconds = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log('\x1b[1m\x1b[36m╔════════════════════════════════════════════╗');
  console.log('\x1b[1m\x1b[36m║                                            ║');
  console.log(`\x1b[1m\x1b[36m            ${botName}     `);
  console.log(`\x1b[1m\x1b[36m            👑 Authorization : ${status}    `);
  console.log(`\x1b[1m\x1b[36m            💡 Version: ${version}`);
  console.log(`\x1b[1m\x1b[36m            📅 Uptime: ${uptimeInSeconds}s`);
  console.log(`\x1b[1m\x1b[36m            🚀 Powered by ${rtxText}`);
  console.log('\x1b[1m\x1b[36m║                                            ║');
  console.log('\x1b[1m\x1b[36m╚════════════════════════════════════════════╝\x1b[0m');
}

module.exports = {
  printWatermark,
};


/*

   # MADE BY Juxyiko
   ## FOR HELP CONTACT ME ON Facebook
   ## Contact    [ Facebook: http://www.facebook.com/Juxyiko ]
*/