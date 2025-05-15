const http = require("http");
const fileModule = require("./fileModule");

const happyBirthday = `
Yo squad! 

Another year, another chance to celebrate the realest team I know. I just wanted to take a moment to say HAPPY BIRTHDAY to every single one of you legends! 💯

We have been through a lot together — laughs, late nights, wins, Ls, and memories thatll never fade. Honestly, life hits different when you’ve got people like y’all in your corner. 

Heres to more crazy moments, big moves, group chats full of madness, and growth on every level. Keep chasing your dreams, keep backing each other up, and keep being the dopest squad out here.

Much love, much respect, and all the good energy as we level up another year. Lets keep shining and living it up the best way we know how!

HBD, fam. One love always!

Your Squad
`;

http
  .createServer((req, res) => {
    fileModule.writeAndReadFile("data.txt", happyBirthday, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error processing file");
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(data);
      }
    });
  })
  .listen(8001, () => {
    console.log("leter writen sucesfully");
  });
