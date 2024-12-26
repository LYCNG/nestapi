import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AdminGuard } from 'src/guard/admin.guard';
import { AuthGuard } from 'src/guard/auth.guard';
import { IProductService } from './type';


@Controller('products')
@UseGuards(AuthGuard, AdminGuard)
export class ProductController {
    constructor(private readonly productsService: IProductService) { }


}