/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class BibliaService {
  private bibleData: any;

  constructor() {
    const filePath = path.join(__dirname, '../../../src/data/bible.json');
    this.bibleData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }

  getBooks(): any {
    return this.bibleData; // Retorna a estrutura completa dos livros
  }

  getChapters(book: string): any | null {
    return this.bibleData[book] || null; // Retorna os capítulos completos de um livro
  }

  getVerses(book: string, chapter: string): any | null {
    return this.bibleData[book]?.[chapter] || null; // Retorna os versículos completos de um capítulo
  }

  getVerse(book: string, chapter: string, verse: string): string | null {
    return this.bibleData[book]?.[chapter]?.[verse] || null; // Retorna um versículo específico
  }
}