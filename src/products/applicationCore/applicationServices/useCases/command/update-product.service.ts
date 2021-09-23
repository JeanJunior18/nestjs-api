import { Injectable } from '@nestjs/common';
import { ProductRepo } from 'src/products/infrastructure/repositories/product.repository';
import { UpdateProductDto } from 'src/products/userInterfaces/dto/update-product.dto';

@Injectable()
export class UpdateProductService {
  constructor(private productRepository: ProductRepo) {}

  execute(id: string, productData: UpdateProductDto) {
    return this.productRepository.update(id, productData);
  }
}
