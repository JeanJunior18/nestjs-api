import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryPort } from 'src/products/ApplicationCore/applicationServices/ports/repository.port';
import { Product } from 'src/products/ApplicationCore/domain/model';
import { CreateProductDto } from 'src/products/UserInterfaces/dto/create-product.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProductRepository implements RepositoryPort<Product> {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  async create(productData: CreateProductDto) {
    const product = this.repository.create(productData);
    return this.repository.save(product);
  }
}
