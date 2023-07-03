import { RmqModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { BillingsController } from './billings.controller';
import { BillingsService } from './billings.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RMQ_URI: Joi.string().required(),
        RMQ_BILLING_QUEUE: Joi.string().required(),
      }),
      expandVariables: true,
      envFilePath: './apps/billings/.env',
    }),
    RmqModule,
  ],
  controllers: [BillingsController],
  providers: [BillingsService],
})
export class BillingsModule {}
