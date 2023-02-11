const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = require("@adiwajshing/baileys");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const BOT_NAME = process.env.BOT_NAME ?? " ";
const { Configuration, OpenAIApi } = require("openai");
let setting = require("./key.json");

module.exports = yesbhautikai = async (client, m, chatUpdate, store) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
          m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    // var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/"
    var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";
    const isCmd2 = body.startsWith(prefix);
    const command = body
      .replace(prefix, "")
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);

    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };

    // Group
    const groupMetadata = m.isGroup
      ? await client.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";

    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

    if (isCmd2 && !m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`)
      );
    } else if (isCmd2 && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
    }

    if (isCmd2) {
      switch (command) {
        case "help":
        case "menu":
          m.reply(`*Whatsapp Ai Bot*
            
*(BB TXT AI)*
Cmd: ${prefix}ai 
Ask anything to AI.

*(BB IMG AI)*
Cmd: ${prefix}img
Create an image from text`);
          break;
        case "ai":
        case "openai":
          try {
            if (setting.keyopenai === "ISI_APIKEY_OPENAI_DISINI")
              return reply(
                "Apikey has not been filled\n\nPlease fill in the apikey first in the key.json file\n\nThe api key can be generated on the website: https://beta.openai.com/account/api-keys"
              );
            if (!text)
              return reply(
                `Chat with AI.\n\nExample:\n${prefix}${command} What is a recession`
              );
            const configuration = new Configuration({
              apiKey: setting.keyopenai,
            });    

            const openai = new OpenAIApi(configuration);
            const convo = JSON.stringify(text);
            const pik = JSON.stringify(pushname);
            const newl = "\n";
            const space = " ";
            const human = "Human :";
            const puss = JSON.parse(pik);
            const fill = fs.openSync("yesbhautik/" +puss+".txt", 'a');  
            const jsonObj = JSON.parse(convo);
            const botn = " ";
            let redo = fs.readFileSync("yesbhautik/" + puss + ".txt");
            const phd = redo.toString();
            let promo = phd + "\n\n" + text + " :";         
              
  

            const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: promo,
              temperature: 0.9,
              max_tokens: 3000,
              top_p: 1,
              frequency_penalty: 0.0,
              presence_penalty: 0.6,
            });
            const pp = response.toString()

            m.reply(`${response.data.choices[0].text}`);
            const repo = JSON.stringify(`${response.data.choices[0].text}`);
            const noNewLines = JSON.parse(repo);
            const rply = noNewLines.replace(/\r?\n|\r/g, "");
            fs.appendFile("yesbhautik/convo.txt", newl, function (err) {
              if (err) throw err;
            });
            fs.appendFile("yesbhautik/" + puss + ".txt", space, function (err) {
              fs.appendFile("yesbhautik/" + puss + ".txt", newl, function (err) {
                  fs.appendFile("yesbhautik/" + puss + ".txt", space, function (err) {
                    fs.appendFile("yesbhautik/" + puss + ".txt", jsonObj, function (err) {
                        fs.appendFile("yesbhautik/" + puss + ".txt",newl, function (err) {
                          fs.appendFile("yesbhautik/" + puss + ".txt", newl, function (err) {
                            fs.appendFile("yesbhautik/" + puss + ".txt", rply, function (err) {
                              fs.appendFile("yesbhautik/" + puss + ".txt", newl, function (err) {
              if (err) throw err;
            });
              if (err) throw err;
            });
              if (err) throw err;
            });
              if (err) throw err;
            });
              if (err) throw err;
            });
              if (err) throw err;
            });
              if (err) throw erroror;
            });
              if (err) throw err;
            });

          } catch (error) {
            if (error.response) {
              console.log(error.response.status);
              console.log(error.response.data);
              console.log(`${error.response.status}\n\n${error.response.data}`);
            } else {
              console.log(error);
              m.reply("Sorry, there seems to be an error :" + error.message);
            }
          }
          break;
        case "img":
        case "ai-img":
        case "image":
        case "images":
          try {
            if (setting.keyopenai === "ISI_APIKEY_OPENAI_DISINI")
              return reply(
                "Apikey has not been filled\n\nPlease fill in the apikey first in the key.json file\n\nApikey can be made on the website: https://beta.openai.com/account/api-keys"
              );
            if (!text)
              return reply(
                `Mcreate an image from AI.\n\nExample:\n${prefix}${command} Wooden house on snow mountain`
              );
            const configuration = new Configuration({
              apiKey: setting.keyopenai,
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            //console.log(response.data.data[0].url)
            client.sendImage(from, response.data.data[0].url, text, mek);
          } catch (error) {
            if (error.response) {
              console.log(error.response.status);
              console.log(error.response.data);
              console.log(`${error.response.status}\n\n${error.response.data}`);
            } else {
              console.log(error);
              m.reply("Sorry, there seems to be an error :" + error.message);
            }
          }
          break;
        default: {
          if (isCmd2 && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (isCmd2 && !m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(
                chalk.black(chalk.bgRed("[ ERROR ]")),
                color("command", "turquoise"),
                color(`${prefix}${command}`, "turquoise"),
                color("not available", "turquoise")
              );
            } else if (argsLog || (isCmd2 && m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(
                chalk.black(chalk.bgRed("[ ERROR ]")),
                color("command", "turquoise"),
                color(`${prefix}${command}`, "turquoise"),
                color("not available", "turquoise")
              );
            }
          }
        }
      }
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});