import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from "./app.service";
import { Public } from './public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
