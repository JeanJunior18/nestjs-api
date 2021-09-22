import { Controller, Post, Body } from '@nestjs/common';
import { CreateProductService } from 'src/products/ApplicationCore/applicationServices/useCases';
import { CreateProductDto } from '../dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly createProductService: CreateProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.createProductService.execute(createProductDto);
  }
}
