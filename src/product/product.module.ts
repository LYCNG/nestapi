import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { ProductMockService } from './productMock.service';

const enableDatabase = process.env.ENABLE_DATABASE === 'true';

@Module({
  imports: [
    ...(enableDatabase ? [TypeOrmModule.forFeature([Product])] : [])
  ],
  providers: [
    {
      provide: 'ProductServiceMain',
      useClass: enableDatabase ? ProductService : ProductMockService,
    }
  ],
  controllers: [ProductController],
  exports: [
    'ProductServiceMain'
  ],
})
export class ProductModule { }

