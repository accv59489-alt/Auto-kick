const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

const ROLE_ID = 'ROLE_ID_HERE';

client.on('guildMemberUpdate', (oldMember, newMember) => {
  if (
    !oldMember.roles.cache.has(ROLE_ID) &&
     newMember.roles.cache.has(ROLE_ID)
  ) {
    newMember.kick('AutoKick role');
  }
});

client.login(process.env.TOKEN);
