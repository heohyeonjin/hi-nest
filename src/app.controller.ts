/*홈페이지를 가져오는 일*/
import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  home() {
    return 'Welcom to my Movie API';
  }
  //AppController를 가질때 app.controller가 하는 일
}
