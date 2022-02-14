import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosController } from './livros/livros.controller';

@Module({
  imports: [],
  controllers: [AppController, LivrosController],
  providers: [AppService],
})
export class AppModule {}
