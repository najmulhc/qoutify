import { quoteRepository } from "./quotes.repository";

export class quoteService {
  qotueRepo: quoteRepository;

  constructor() {
    this.qotueRepo = new quoteRepository();
  }

  async getAllquotes() {
    return  this.qotueRepo.getAllquotes();
  }

  async postquote(author: string, content: string) {
    return  this.qotueRepo.addNewquote({
      author,
      content,
    });
  }

  async getRandomquote() {
    return  this.qotueRepo.getRandomquote();
  }
  async getquoteById(id: number) {
    return  this.qotueRepo.getSinglequote(id);
  }

  async updatequote(
    id: number,
    quote: { author: string; content: string; id: number },
  ) {
    return  this.qotueRepo.editquote(id, quote);
  }

  async deletequote(id: number) {
    return this.qotueRepo.deletequote(id);
  }
}
