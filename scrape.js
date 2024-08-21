import puppeteer from "puppeteer";

const scrape = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url = "https://en.wikipedia.org/wiki/Algeria";
  await page.goto(url);

  const infos = await page.evaluate(() => {
    const title = document.querySelector("h1.firstHeading").textContent;
    return title;
  });
  console.log(infos);

  await browser.close();
};

scrape();
