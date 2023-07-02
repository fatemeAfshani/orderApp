import { NestFactory } from '@nestjs/core';
import { BillingsModule } from './billings.module';

async function bootstrap() {
  const app = await NestFactory.create(BillingsModule);
  await app.listen(3000);
}
bootstrap();
