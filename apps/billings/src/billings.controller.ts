import { JwtAuthGuard, RmqService } from '@app/common';
import { Controller, UseGuards } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { BillingsService } from './billings.service';

@Controller()
export class BillingsController {
  constructor(
    private readonly billingsService: BillingsService,
    private rmqService: RmqService,
  ) {}

  @MessagePattern('order_created')
  @UseGuards(JwtAuthGuard)
  async handleCreateOrder(@Payload() data: any, @Ctx() context: RmqContext) {
    await this.billingsService.bill(data);
    this.rmqService.ack(context);
  }
}
