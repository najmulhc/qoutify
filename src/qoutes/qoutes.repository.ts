import { readFileSync, writeFileSync } from "fs";

const getData = async () => {
  const str = await readFileSync("db/qoutes.json", "utf-8");
  const qoutes = JSON.parse(str);
  return qoutes;
};

const postData = async (
  qoutes: { id: number; author: string; content: string }[],
) => {
  const str = JSON.stringify(qoutes);
  const res = await writeFileSync("db/qoutes.json", str);
  return res;
};

export class QouteRepository {
  async getAllQoutes() {
    const qoutes = await getData();
    return qoutes;
  }

  async getSingleQoute(id: number) {
    const qoutes = await getData();
    return qoutes.filter((item) => item.id == id);
  }

  async getRandomQoute() {
    const qoutes = await getData();
    return qoutes[Math.floor(Math.random() * qoutes.length)];
  }

  async addNewQoute(qoute: { author: string; content: string }) {
    const existedQoutes = await getData();
    const size = existedQoutes.length;
    const newQoute = {
      ...qoute,
      id: Math.ceil(Math.random() * 1000),
    };
    existedQoutes.push(newQoute);
    return await postData(existedQoutes);
  }

  async editQoute(id: number, qoute: { author: string; content: string }) {
    let qoutes = await getData();
    let item = qoutes.filter((item) => item.id === id)[0];
    item = { ...item, ...qoute };
    qoutes = qoutes.filter((item) => item.id !== id);
    qoutes.push(item); 
    return await postData(qoutes);
  }

  async deleteQoute(id: number) {
    let qoutes = await getData();
    qoutes = qoutes.filter((item) => item.id !== id);
    return await postData(qoutes);
  }
}
