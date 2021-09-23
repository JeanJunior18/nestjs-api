import { Logger } from '@nestjs/common';
import { ProductRepo } from 'src/products/Infrastructure/repositories';
import { WriteOffStockDto } from 'src/products/UserInterfaces/dto/write-off-stock.dto';

export class WriteOffStockService {
  constructor(private readonly productRepo: ProductRepo) {}
  private readonly logger = new Logger('WriteOffStockService');

  async execute({ productId, quantity }: WriteOffStockDto) {
    this.logger.verbose(
      `WriteOffStockService.execute(${productId}, ${quantity})`,
    );
  }
}
