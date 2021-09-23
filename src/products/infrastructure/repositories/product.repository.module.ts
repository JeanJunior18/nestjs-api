import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from 'src/products/applicationCore/domain/model';
import { ProductRepo } from './product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductRepo],
  exports: [ProductRepo],
})
export class ProductRepositoryModule {}
