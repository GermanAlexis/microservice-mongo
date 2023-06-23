import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://guxoyfiu:lb_19MjbElCebiPkQFV9jxqx5Oo8KgMY@shrimp.rmq.cloudamqp.com/guxoyfiu',
        ],
        queue: 'main_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  app.listen();
}
bootstrap();
