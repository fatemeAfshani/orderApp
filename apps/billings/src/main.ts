import { RmqService } from '@app/common';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { BillingsModule } from './billings.module';

async function bootstrap() {
  const logger = new Logger('billing');
  const app = await NestFactory.create(BillingsModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('BILLING'));
  await app.startAllMicroservices();
  logger.log('app is up and running');
}
bootstrap();
