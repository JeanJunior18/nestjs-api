import { Module } from '@nestjs/common';
import { ProductsController } from './UserInterfaces/restControllers/products.controller';
import {
  CreateProductService,
  UpdateProductService,
} from './ApplicationCore/applicationServices/useCases';
import { ProductRepositoryModule } from './Infrastructure/repositories/product.repository.module';

@Module({
  imports: [ProductRepositoryModule],
  controllers: [ProductsController],
  providers: [CreateProductService, UpdateProductService],
})
export class ProductsModule {}
