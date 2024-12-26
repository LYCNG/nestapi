import { Product } from "src/entities/product.entity";


export interface IProductService {
    findAll(): Promise<Product[]>;
}

