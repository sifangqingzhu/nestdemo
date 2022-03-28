import { Controller, Get } from '@nestjs/common';

@Controller('artile')
export class ArtileController {
  @Get()
  index() {
    return '我是一个文章页面';
  }

  @Get('news')
  index2() {
    return '我是一个文章页面news';
  }
}
