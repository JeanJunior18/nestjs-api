import { Injectable } from '@nestjs/common';
import { ProductRepo } from 'src/products/infrastructure/repositories/product.repository';
import { CreateProductDto } from 'src/products/userInterfaces/dto/create-product.dto';

@Injectable()
export class CreateProductService {
  constructor(private productRepository: ProductRepo) {}

  execute(productData: CreateProductDto) {
    return this.productRepository.create(productData);
  }
}
