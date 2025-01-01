import { Module } from '@nestjs/common';

import { Prize } from 'src/entities/prize.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrizeService } from './prize.service';
import { PrizeController } from './prize.controller';
import { PrizeMockService } from './prizeMock.service';

const enableDatabase = process.env.ENABLE_DATABASE === 'true';

@Module({
  imports: [
    ...(enableDatabase ? [TypeOrmModule.forFeature([Prize])] : [])
  ],
  providers: [
    {
      provide: 'PrizeServiceMain',
      useClass: enableDatabase ? PrizeService : PrizeMockService,
    }
  ],
  controllers: [PrizeController],

})
export class PrizeModule { }
