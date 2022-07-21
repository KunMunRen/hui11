import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getHello(): string {
    return 'Hello';
  }
  getCreate(): string {
    return 'Post';
  }
  getUpdate(): string {
    return 'Update';
  }
  getDelete(): string {
    return 'Delete';
  }
}
