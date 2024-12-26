import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/typeorm.module';
import { LotteryModule } from './lottery/lottery.module';
import { JwtConfigModule } from './jwt/jwt-config.module';
import { ProductModule } from './product/product.module';
import { PrizeModule } from './prize/prize.module';


const enableDatabase = process.env.ENABLE_DATABASE === 'true';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    JwtConfigModule,
    ...(enableDatabase ? [DatabaseModule] : []),
    // DatabaseModule,
    ConfigModule.forRoot({
      //詳細介紹: https://docs.nestjs.com/techniques/configuration
      isGlobal: true,
      ignoreEnvFile: false,//是否
      envFilePath: '.env',
    }),
    LotteryModule,
    ProductModule,
    PrizeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
