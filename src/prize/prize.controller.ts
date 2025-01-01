import { Controller, Post, Body, Get, Param, Inject } from '@nestjs/common';
import { PrizeService } from './prize.service';
import { IPrizeService } from './type';



@Controller('prize')
export class PrizeController {
    constructor(
        @Inject('PrizeServiceMain') private readonly prizeService: IPrizeService) { }

    @Get()
    async getPrize() {
        return ['abc']
    };
}
