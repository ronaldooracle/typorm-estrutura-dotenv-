import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';
import {
  CreatelivrosDto,
  ListAllEntities,
  UpdateCatDto,
} from './dtos/create-livros.dto';
import { Response } from 'express';

@Controller('livros')
export class LivrosController {
  @Post()
  create(@Res() res: Response) {
    return res.json({ status: 'Cadastrado com Sucesso' });
  }

  @Get()
  findAll(@Res() res: Response) {
    return res.json({ name: 'string', age: 'number', breed: 'string' });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Lista de Livos por id #${id} `;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `Alteração de livros por id  #${id} `;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `delete livros por id  #${id}`;
  }
}
