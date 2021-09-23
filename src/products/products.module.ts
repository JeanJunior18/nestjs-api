import { Module } from '@nestjs/common';
import { ProductRepositoryModule } from './infrastructure/repositories/product.repository.module';
import {
  CreateProductService,
  FindProductByIdService,
  ListProductService,
  UpdateProductService,
} from './applicationCore/applicationServices/useCases';
import {
  ProductsController,
  SendWriteOffStockController,
} from './userInterfaces/restControllers';
import { KafkaModule } from './infrastructure/eventBUS/kafka.module';

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
