import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { WriteOffStockService } from 'src/products/applicationCore/applicationServices/useCases';
import { IncomingKafkaMessage } from 'src/products/infrastructure/eventBUS/incomming-kafka-message';
import { WriteOffStockDto } from '../dto/write-off-stock.dto';

@Controller()
export class WriteOffStockController {
  constructor(private readonly writeOffStockService: WriteOffStockService) {}
  private readonly logger = new Logger('WriteOffStockController');

  @EventPattern('write-off-stock')
  async execute(@Payload() data: IncomingKafkaMessage<WriteOffStockDto>) {
    this.logger.verbose(`Received event: ${JSON.stringify(data)}`);
    this.writeOffStockService.execute(data.value);
  }
}
