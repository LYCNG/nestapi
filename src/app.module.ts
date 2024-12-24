import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/typeorm.module';


@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, ConfigModule.forRoot({
    //詳細介紹: https://docs.nestjs.com/techniques/configuration
    isGlobal: true,
    ignoreEnvFile: false,//是否
    envFilePath: '.env',
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
