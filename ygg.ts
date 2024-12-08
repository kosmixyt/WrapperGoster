import { connect } from "puppeteer-real-browser";
import { timeout } from "./util.ts";




export async function fetchYggTorrentCloudflare() {
  const { page, browser } = await connect({
    headless: false,
    customConfig: {},
    turnstile: true,
    connectOption: {
      defaultViewport: null,
    },
    args: [],
  });
  console.error("Connected");
  await page.goto("http://ygg.re", { waitUntil: "networkidle2" });
  await page.waitForRequest((url) => url.url().includes("/assets/css/bootstrap.min.css"), {});
  await timeout(1000);
  console.error("Bootstrap loaded");
  const ua = await browser.userAgent();
  const cok = (await page.cookies()).map((cookie) => `${cookie.name}=${cookie.value}`).join("; ");
  await page.close();
  await browser.close();
  return JSON.stringify({
    userAgent: ua,
    cookies: cok,
  });
}

