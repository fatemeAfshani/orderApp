import { Module } from '@nestjs/common';
import { BillingsController } from './billings.controller';
import { BillingsService } from './billings.service';

@Module({
  imports: [],
  controllers: [BillingsController],
  providers: [BillingsService],
})
export class BillingsModule {}
