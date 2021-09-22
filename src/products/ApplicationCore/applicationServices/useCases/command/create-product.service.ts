import { Injectable, Logger } from '@nestjs/common';
import { ProductRepository } from 'src/products/Infrastructure/repositories/product.repository';
import { CreateProductDto } from 'src/products/UserInterfaces/dto/create-product.dto';

@Injectable()
export class CreateProductService {
  private logger = new Logger(CreateProductService.name);

  constructor(private productRepository: ProductRepository) {}

  execute(productData: CreateProductDto) {
    return this.productRepository.create(productData);
  }
}
