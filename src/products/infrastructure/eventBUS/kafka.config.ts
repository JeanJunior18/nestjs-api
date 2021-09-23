import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const KafkaOptions: ClientProviderOptions = {
  name: 'KAFKA_SERVICE',
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['host.docker.internal:9094'],
    },
    consumer: {
      groupId: 'nestjs-kafka-example ' + Date.now(),
    },
  },
};
