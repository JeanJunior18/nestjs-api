import { Module } from '@nestjs/common';
import { ProductRepositoryModule } from './Infrastructure/repositories/product.repository.module';
import {
  CreateProductService,
  FindProductByIdService,
  ListProductService,
  UpdateProductService,
} from './ApplicationCore/applicationServices/useCases';
import {
  ProductsController,
  SendWriteOffStockController,
} from './UserInterfaces/restControllers';
import { KafkaModule } from './Infrastructure/eventBUS/kafka.module';

@Module({
  imports: [ProductRepositoryModule, KafkaModule],
  controllers: [ProductsController, SendWriteOffStockController],
  providers: [
    CreateProductService,
    UpdateProductService,
    ListProductService,
    FindProductByIdService,
  ],
})
export class ProductsModule {}
