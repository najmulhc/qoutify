import { QouteRepository } from "./qoutes.repository";

export class QouteService {
  qotueRepo: QouteRepository;

  constructor() {
    this.qotueRepo = new QouteRepository();
  }

  async getAllQoutes() {
    return await this.qotueRepo.getAllQoutes();
  }

  async postQoute(author: string, content: string) {
    return await this.qotueRepo.addNewQoute({
      author,
      content,
    });
  }

  async getRandomQoute() {
    return await this.qotueRepo.getRandomQoute();
  }
  async getQouteById(id: number) {
    return await this.qotueRepo.getSingleQoute(id);
  }
  
  async updateQoute(id: number, qoute: { author: string, content: string, id:number }) { 
    return await this.qotueRepo.editQoute(id, qoute)
  }
    
  async deleteQoute(id: number) { 
    return this.qotueRepo.deleteQoute(id); 
  }
}
