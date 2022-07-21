import { TodoService } from './todo.service';
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getHello(): string {
    return this.todoService.getHello();
  }
  @Post()
  create(): string {
    return this.itemsService.create();
  }
  @Put()
  update(): string {
    return this.itemsService.update();
  }
  @Delete()
  delete(): string {
    return this.itemsService.delete();
  }
}
