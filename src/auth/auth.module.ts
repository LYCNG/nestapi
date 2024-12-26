import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from 'src/guard/auth.guard';
import { APP_GUARD } from '@nestjs/core/constants';
import { JwtConfigModule } from 'src/jwt/jwt-config.module';

@Module({
  imports: [
    UsersModule,
    JwtConfigModule,
  ],
  controllers: [AuthController],
  providers: [AuthService,
  ],
  exports: [AuthService],
})

export class AuthModule { }
