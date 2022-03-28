import { Controller, Get, Post, Query, Request, Body } from '@nestjs/common';

@Controller('user')
export class UserController {
  //默认加载方法
  @Get()
  index() {
    return '用户中心';
  }

  //get中传入参数通过query装饰器
  @Get('add')
  addData(@Query() query) {
    console.log('query :>> ', query);
    return '增加数据';
  }

  //get中传入参数通过request装饰器
  @Get('edit')
  editData(@Request() req) {
    console.log('req :>> ', req.query);
    return '通过request获取get传值';
  }

  //Post
  @Post('create')
  create() {
    console.log('触发了post方法 :>> ');
    return '我是post方法';
  }

  //获取post传值
  @Post('createNew')
  createNew(@Body() data) {
    console.log('data :>> ', data);
    return '我是post方法';
  }
}
