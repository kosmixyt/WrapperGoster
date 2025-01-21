import readline from "node:readline";
const YoutubeMusicApi = require("youtube-music-api");
const api = new YoutubeMusicApi();

export const music = async () => {
  const info = await api.initalize();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", async (line) => {
    // console.log(line);
    const start = Date.now();
    const command = line.split("|||");
    if (command.length < 2) {
      return console.log("Invalid command");
    }
    switch (command[0]) {
      case "search":
        console.log(JSON.stringify(await api.search(command[1])));
        break;
      case "album":
        console.log(JSON.stringify(await api.getAlbum(command[1])));
        break;
      case "artist":
        console.log(JSON.stringify(await api.getArtist(command[1])));
        break;
      case "playlist":
        console.log(JSON.stringify(await api.getPlaylist(command[1])));
        break;
    }
    // console.log(`Executed in ${Date.now() - start}ms`);
  });
};
