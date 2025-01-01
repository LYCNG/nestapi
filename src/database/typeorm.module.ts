import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getTypeOrmConfig } from './typeorm.config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: getTypeOrmConfig,
        }),
    ],
    exports: [TypeOrmModule], // 導出 TypeOrmModule 讓其他模組可以使用
})
export class DatabaseModule { }