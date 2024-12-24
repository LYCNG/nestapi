import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Point } from '../entities/point.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql', // 或 'postgres'
    host: 'localhost',
    port: 3306, // 替換為您使用的資料庫埠號
    username: 'root', // 資料庫帳號
    password: 'password', // 資料庫密碼
    database: 'nestjs_db', // 資料庫名稱
    entities: [User, Point],
    synchronize: true, // 僅用於開發，生產環境請關閉
};
