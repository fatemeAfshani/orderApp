import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(OrdersModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  const port = configService.get('PORT');
  await app.listen(port);
  logger.log(`app is up and running on port ${port}`);
}
bootstrap();
