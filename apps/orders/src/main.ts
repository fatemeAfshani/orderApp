import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { OrdersModule } from './orders.module';

async function bootstrap() {
  const logger = new Logger('orders');
  const app = await NestFactory.create(OrdersModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  const port = configService.get('PORT');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Order App')
    .setDescription('The order app API description')
    .setVersion('1.0')
    .addCookieAuth('Authentication')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(port);
  logger.log(`app is up and running on port ${port}`);
}
bootstrap();
