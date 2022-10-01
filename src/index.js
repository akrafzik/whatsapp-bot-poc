const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const client = new Client({
  authStrategy: new LocalAuth({dataPath: 'whatsSessions'}),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
  const contactNumber = "";

  const chats = client
    .sendMessage(
      `${contactNumber}@c.us`,
      "test message"
    )
    .then(message => {
        console.log('message :>> ', message);
    });
});

client.on("message", (message) => {
  if (message.body === "!ping") {
    message.reply("pong");
  }
});

client.initialize();
