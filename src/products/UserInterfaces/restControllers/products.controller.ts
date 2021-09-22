import { Controller, Post, Body, Patch, Param } from '@nestjs/common';
import {
  CreateProductService,
  UpdateProductService,
} from 'src/products/ApplicationCore/applicationServices/useCases';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly createProductService: CreateProductService,
    private readonly updateProductService: UpdateProductService,
  ) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.createProductService.execute(createProductDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.updateProductService.execute(id, updateProductDto);
  }
}
