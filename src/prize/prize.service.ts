import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prize } from 'src/entities/prize.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PrizeService {
    constructor(
        @InjectRepository(Prize)
        private PrizeRepository: Repository<Prize>,
    ) { }


    async findAll(): Promise<Prize[]> {
        return this.PrizeRepository.find();
    }
}