import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';

export const DatabaseModule = TypeOrmModule.forRoot(typeOrmConfig);
