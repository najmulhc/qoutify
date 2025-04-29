import { Injectable } from "@nestjs/common";
import { quoteRepository } from "./quotes.repository";

@Injectable() // now we can use it to inject as a dependency to another class
export class quoteService {
  constructor(public quoteRepository: quoteRepository) {}

  async getAllquotes() {
    return this.quoteRepository.getAllquotes();
  }

  async postquote(author: string, content: string) {
    return this.quoteRepository.addNewquote({
      author,
      content,
    });
  }

  async getRandomquote() {
    return this.quoteRepository.getRandomquote();
  }
  async getquoteById(id: number) {
    return this.quoteRepository.getSinglequote(id);
  }

  async updatequote(
    id: number,
    quote: { author: string; content: string; id: number },
  ) {
    return this.quoteRepository.editquote(id, quote);
  }

  async deletequote(id: number) {
    return this.quoteRepository.deletequote(id);
  }
}
