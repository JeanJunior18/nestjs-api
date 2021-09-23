import { Injectable } from '@nestjs/common';
import { ProductRepo } from 'src/products/infrastructure/repositories/product.repository';

@Injectable()
export class ListProductService {
  constructor(private productRepository: ProductRepo) {}

  execute() {
    return this.productRepository.list();
  }
}
