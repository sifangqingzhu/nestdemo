import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('news')
export class NewsController {
  //限定传值 只传进id
  @Get('add')
  addData(@Query('id') id) {
    console.log('id :>> ', id);
    return '新闻增加';
  }
  //获取动态路由
  @Get(':id')
  index(@Param() param) {
    console.log('param :>> ', param);
    return '这是新闻页面';
  }
}
