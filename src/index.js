import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.on("messageCreate", (message) => {
  console.log(message.content);
});

client.login(
  "b64f0631e180890ff25187d4215d7748ba982bcfc9d90aaf027c7762ca80681f"
);
