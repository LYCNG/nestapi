import { Injectable } from '@nestjs/common';

@Injectable()
export class LotteryService {


    private readonly GRAND_PRIZE_RATE = 0.0005; // 0.05% 機率


    draw(): boolean {
        const random = Math.random();
        return random < this.GRAND_PRIZE_RATE;
    }
}
