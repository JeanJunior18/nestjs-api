import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Producer } from '@nestjs/microservices/external/kafka.interface';

@Controller('checkout')
export class CheckoutController implements OnModuleInit {
  private kafkaProducer: Producer;

  constructor(
    @Inject('KAFKA_SERVICE')
    private readonly clientKafka: ClientKafka,
  ) {}

  async onModuleInit() {
    this.kafkaProducer = await this.clientKafka.connect();
  }

  @Get()
  async checkout() {
    this.kafkaProducer.send({
      topic: 'pagamentos',
      messages: [
        {
          key: Date.now().toString(),
          value: 'Hello World ' + Date.now(),
        },
      ],
    });
    return 'Checkout';
  }
}
