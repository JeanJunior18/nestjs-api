import { Controller, Get, Logger } from '@nestjs/common';
import { EventBusService } from 'src/products/applicationCore/applicationServices/adapters';

@Controller('kafka')
export class SendWriteOffStockController {
  private readonly logger = new Logger('SendWriteOffStockController');
  constructor(private senderService: EventBusService) {}

  @Get('/write-off-stock')
  async sendWriteOffStock() {
    const message = {
      key: Date.now().toString(),
      value: 'Hello World!',
    };
    this.logger.verbose('Sending Message');
    this.senderService.emit('write-off-stock', message);
    return message;
  }
}
