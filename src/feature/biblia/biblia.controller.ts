/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { BibliaService } from './biblia.service';


@Controller('bible')
export class BibliaController {
  constructor(private readonly biblaService: BibliaService) {}

  @Get('books')
  getBooks() {
    return this.biblaService.getBooks();
  }

  @Get(':book/chapters')
  getChapters(@Param('book') book: string) {
    return this.biblaService.getChapters(book);
  }

  @Get(':book/:chapter/verses')
  getVerses(@Param('book') book: string, @Param('chapter') chapter: string) {
    return this.biblaService.getVerses(book, chapter);
  }

  @Get(':book/:chapter/:verse')
  getVerse(
    @Param('book') book: string,
    @Param('chapter') chapter: string,
    @Param('verse') verse: string,
  ) {
    return this.biblaService.getVerse(book, chapter, verse);
  }
}