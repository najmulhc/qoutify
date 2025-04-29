import { readFileSync, writeFileSync } from "fs";

const getData =  () => {
  const str =  readFileSync("db/quotes.json", "utf-8");
  const quotes = JSON.parse(str);
  return quotes;
};

const postData =  (
  quotes: { id: number; author: string; content: string }[],
) => {
  const str = JSON.stringify(quotes);
  const res =  writeFileSync("db/quotes.json", str);
  return res;
};

export class quoteRepository {
  async getAllquotes() {
    const quotes =  getData();
    return quotes;
  }

  async getSinglequote(id: number) {
    const quotes =  getData();
    return quotes.filter((item) => item.id == id);
  }

  async getRandomquote() {
    const quotes =  getData();
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  async addNewquote(quote: { author: string; content: string }) {
    const existedquotes = getData();
    const size = existedquotes.length;
    const newquote = {
      ...quote,
      id: Math.ceil(Math.random() * 1000),
    };
    existedquotes.push(newquote);
    return  postData(existedquotes);
  }

  async editquote(id: number, quote: { author: string; content: string }) {
    let quotes =  getData();
    let item = quotes.filter((item) => item.id === id)[0];
    item = { ...item, ...quote };
    quotes = quotes.filter((item) => item.id !== id);
    quotes.push(item);
    return  postData(quotes);
  }

  async deletequote(id: number) {
    let quotes =  getData();
    quotes = quotes.filter((item) => item.id !== id);
    return  postData(quotes);
  }
}
