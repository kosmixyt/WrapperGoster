import { dynamic,  Stats } from "./stats.ts";
import { fetchYggTorrentCloudflare } from "./ygg.ts";


const firstArg = process.argv[2];

switch (firstArg) {
  case "ygg":
    fetchYggTorrentCloudflare().then(console.log).catch(console.error);
    break;
  case "pc-info":
    Stats().then(console.log).catch(console.error);
    break;
  case "network":
    setInterval(dynamic, 1000);
    break
  default:
    console.error(`Unknown command ${firstArg}`);
    break;
}