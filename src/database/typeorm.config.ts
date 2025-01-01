import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Point } from '../entities/point.entity';
import { ConfigService } from '@nestjs/config';
import { Prize } from 'src/entities/prize.entity';
import { Product } from 'src/entities/product.entity';
import { join } from 'path';


// 在資料庫的領域中，ORM 是一種技術，它允許你使用物件導向程式設計(OOP) 的方式來操作資料庫，而不是直接使用 SQL 語句

export const getTypeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
    type: 'mysql',  // 或根據需求改為 'postgres'
    host: configService.get<string>('DATABASE_HOST'),
    port: configService.get<number>('DATABASE_PORT'),
    username: configService.get<string>('DATABASE_USER'),
    password: configService.get<string>('DATABASE_PASSWORD'),
    database: configService.get<string>('DATABASE_NAME'),
    entities: [join(__dirname, '..', '**', '*.entity{.ts,.js}')],
    synchronize: false, // 開發環境使用，生產環境建議關閉
    // 可選的額外配置
    logging: true,  // 開發時可以開啟，查看 SQL 查詢
    timezone: '+08:00',
});