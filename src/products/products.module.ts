import { Module } from '@nestjs/common';
import { ProductsController } from './UserInterfaces/restControllers/products.controller';
import { CreateProductService } from './ApplicationCore/applicationServices/useCases';
import { ProductRepositoryModule } from './Infrastructure/repositories/product.repository.module';

@Module({
  imports: [ProductRepositoryModule],
  controllers: [ProductsController],
  providers: [CreateProductService],
})
export class ProductsModule {}
