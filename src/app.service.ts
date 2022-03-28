import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '你好 nest';
  }

  getNews(): string {
    return '这个是news字符串';
  }
}
