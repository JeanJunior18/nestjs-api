import { Injectable } from '@nestjs/common';
import { ProductRepo } from 'src/products/Infrastructure/repositories/product.repository';

@Injectable()
export class ListProductService {
  constructor(private productRepository: ProductRepo) {}

  execute() {
    return this.productRepository.list();
  }
}
