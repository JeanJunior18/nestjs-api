import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EntityNotFoundExceptionFilter } from './exception.filters/entity-not-found.exception-filter';
import { KafkaOptions } from './products/infrastructure/eventBUS/kafka.config';
import { initSwagger } from './shared/plugins/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initSwagger(app);
  app.connectMicroservice(KafkaOptions);
  app.useGlobalFilters(new EntityNotFoundExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }));
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
