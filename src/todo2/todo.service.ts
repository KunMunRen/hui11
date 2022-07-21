import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getHello(): string {
    return 'Hello';
  }
  create(): string {
    return 'Post';
  }
  update(): string {
    return 'Update';
  }
  delete(): string {
    return 'Delete';
  }
}
