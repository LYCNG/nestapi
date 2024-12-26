import { Module } from '@nestjs/common';
import { LotteryService } from './lottery.service';

import { APP_GUARD } from '@nestjs/core';
import { LotteryController } from './lottery.controller';
import { JwtConfigModule } from 'src/jwt/jwt-config.module';
import { AuthGuard } from 'src/guard/auth.guard';

@Module({

  imports: [
    JwtConfigModule],
  providers: [LotteryService, {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },],
  controllers: [LotteryController],
  exports: [LotteryService]
})
export class LotteryModule { }
