import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './user.controller';
import { User } from 'src/entities/user.entity';
import { Point } from 'src/entities/point.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuard } from 'src/guard/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { UsersMockService } from './usersMock.service';

const enableDatabase = process.env.ENABLE_DATABASE === 'true';


@Module({
  imports: [
    ...(enableDatabase ? [TypeOrmModule.forFeature([User, Point])] : [])
  ],
  controllers: [UserController],
  providers: [
    {
      provide: 'UsersServiceMain',
      useClass: enableDatabase ? UsersService : UsersMockService,
    }],
  exports: [ // 導出介面的令牌
    'UsersServiceMain'
  ],
})
export class UsersModule { }
