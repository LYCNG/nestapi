import { Module } from '@nestjs/common';

import { Prize } from 'src/entities/prize.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrizeService } from './prize.service';

const enableDatabase = process.env.ENABLE_DATABASE === 'true';

@Module({
  imports: [
    ...(enableDatabase ? [TypeOrmModule.forFeature([Prize])] : [])
  ],
  providers: [PrizeService]
})
export class PrizeModule { }
