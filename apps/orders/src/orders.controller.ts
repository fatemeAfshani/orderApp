import { JwtAuthGuard } from '@app/common';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { CreateOrderDto } from './dtos/create-order.dto';
import { Order } from './order.schema';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getOrders(): Promise<Order[]> {
    return this.ordersService.getOrders();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() orderDto: CreateOrderDto,
    @Req() req: Request,
  ): Promise<Order> {
    console.log('#### user', req.user);
    return this.ordersService.createOrder(
      orderDto,
      req.cookies?.Authentication,
    );
  }
}
