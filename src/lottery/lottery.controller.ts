import { Controller, Post, UseGuards } from '@nestjs/common';
import { LotteryService } from './lottery.service';

@Controller('lottery')
export class LotteryController {

    constructor(private readonly lotteryService: LotteryService) { }
    @Post('draw')
    async draw() {
        const isWinner = this.lotteryService.draw();

        return {
            success: true,
            message: isWinner ? '恭喜中獎！' : '可惜，再接再厲！',
            result: isWinner,
        };
    }
}
