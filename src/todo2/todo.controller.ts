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
  getCreate(): string {
    return this.todoService.getCreate();
  }
  @Put()
  getUpdate(): string {
    return this.todoService.getUpdate();
  }
  @Delete()
  getDelete(): string {
    return this.todoService.getDelete();
  }
}
