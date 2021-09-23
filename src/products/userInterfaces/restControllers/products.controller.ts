import { Controller, Post, Body, Patch, Param, Get } from '@nestjs/common';
import { UpdateProductDto } from '../dto/update-product.dto';
import { CreateProductDto } from '../dto/create-product.dto';
import {
  CreateProductService,
  FindProductByIdService,
  ListProductService,
  UpdateProductService,
} from 'src/products/applicationCore/applicationServices/useCases';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly createProductService: CreateProductService,
    private readonly updateProductService: UpdateProductService,
    private readonly listProductService: ListProductService,
    private readonly findProductByIdService: FindProductByIdService,
  ) {}

  @Get()
  list() {
    return this.listProductService.execute();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.findProductByIdService.execute(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.createProductService.execute(createProductDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.updateProductService.execute(id, updateProductDto);
  }
}
