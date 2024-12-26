import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductMockService {

    private products: Product[] = [
        {
            id: '1',
            name: 'product1',
            price: 100,
            imageUrl: 'https://picsum.photos/200/300',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '2',
            name: 'product2',
            price: 200,
            imageUrl: 'https://picsum.photos/200/300',
            createdAt: new Date(),
            updatedAt: new Date(),
        },

    ];


    async findAll(): Promise<Product[]> {
        return this.products;
    }
}