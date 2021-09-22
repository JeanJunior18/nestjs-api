import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { EntityNotFoundExceptionFilter } from './exception.filters/entity-not-found.exception-filter';
import { initSwagger } from './shared/plugins/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initSwagger(app);
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['host.docker.internal:9094'],
      },
      consumer: {
        groupId: 'nestjs-kafka-example ' + Date.now(),
      },
    },
  });
  app.useGlobalFilters(new EntityNotFoundExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }));
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
