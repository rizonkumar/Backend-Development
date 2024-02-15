const { Telegraf } = require("telegraf");
require("dotenv").config();

if (!process.env.BOT_TOKEN) {
  console.error("BOT_TOKEN must be provided!");
  process.exit(1);
}

const bot = new Telegraf(process.env.BOT_TOKEN);

const binarySearchString = `
const binarySearch = function search(arr, x) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == x) return x;
    else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return undefined;
};
`;

bot.start((ctx) => {
  const welcomeMessage = `Welcome to Rizon Bot! Here are some commands you can use:
  /binarysearch - Learn about the binary search algorithm.
  /toplinuxcommand - Get top Linux commands.
  Send any sticker, and I'll show some love ❤️.
  Anything else, I might get a bit confused 🤷‍♂️.`;
  ctx.reply(welcomeMessage);
});

bot.command("binarysearch", (ctx) => {
  ctx.reply("Here's a JavaScript function for binary search:", {
    reply_markup: {
      keyboard: [[{ text: "Want to try another command?" }]],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
  ctx.reply(`\`\`\`${binarySearchString}\`\`\``, { parse_mode: "MarkdownV2" });
});

bot.command("toplinuxcommand", (ctx) => {
  ctx.reply(
    "Here are some top Linux commands:\n- ls\n- cd\n- pwd\n- grep\n- rm",
    { parse_mode: "Markdown" }
  );
});
bot.on("sticker", (ctx) => ctx.reply("❤️"));

bot.on("text", (ctx) => {
  if (ctx.message.text.toLowerCase().includes("hello")) {
    ctx.reply("Hello there! How can I assist you today?");
  } else {
    ctx.reply(
      "I'm sorry, I don't understand humans that well. Try /start to see what I can do!"
    );
  }
});

bot.catch((err, ctx) => {
  console.error(`Ooops, encountered an error for ${ctx.updateType}`, err);
});

bot.launch().then(() => {
  console.log("Rizon Bot is up and running!");
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
