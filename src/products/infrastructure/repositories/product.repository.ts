import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryPort } from 'src/products/applicationCore/applicationServices/ports/repository.port';
import { Product } from 'src/products/applicationCore/domain/model';
import { CreateProductDto } from 'src/products/userInterfaces/dto/create-product.dto';
import { UpdateProductDto } from 'src/products/userInterfaces/dto/update-product.dto';
import { EntityNotFoundError, Repository } from 'typeorm';

@Injectable()
export class ProductRepo implements RepositoryPort<Product> {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  async create(productData: CreateProductDto) {
    const product = this.repository.create(productData);
    return this.repository.save(product);
  }

  async update(id: string, productData: UpdateProductDto) {
    const updateResult = await this.repository.update(id, productData);

    if (!updateResult.affected) {
      throw new EntityNotFoundError(Product, id);
    }

    return this.repository.findOne(id);
  }

  async list() {
    return this.repository.find();
  }

  async findById(id: string) {
    return this.repository.findOne(id);
  }
}
