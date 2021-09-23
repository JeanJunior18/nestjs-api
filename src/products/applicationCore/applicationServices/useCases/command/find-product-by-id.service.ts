import { Injectable } from '@nestjs/common';
import { Product } from 'src/products/applicationCore/domain/model';
import { ProductRepo } from 'src/products/infrastructure/repositories/product.repository';
import { EntityNotFoundError } from 'typeorm';

@Injectable()
export class FindProductByIdService {
  constructor(private productRepository: ProductRepo) {}

  async execute(id: string) {
    const product = await this.productRepository.findById(id);
    if (!product) throw new EntityNotFoundError(Product, id);
    return product;
  }
}
