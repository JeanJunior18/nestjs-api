import { Module } from '@nestjs/common';
import { ProductRepositoryModule } from './Infrastructure/repositories/product.repository.module';
import { ProductsController } from './UserInterfaces/restControllers/products.controller';
import {
  CreateProductService,
  FindProductByIdService,
  ListProductService,
  UpdateProductService,
} from './ApplicationCore/applicationServices/useCases';

@Module({
  imports: [ProductRepositoryModule],
  controllers: [ProductsController],
  providers: [
    CreateProductService,
    UpdateProductService,
    ListProductService,
    FindProductByIdService,
  ],
})
export class ProductsModule {}
