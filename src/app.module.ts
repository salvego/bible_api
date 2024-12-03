/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BibliaModule } from './feature/biblia/biblia.module';

@Module({
  imports: [ConfigModule.forRoot(), BibliaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
