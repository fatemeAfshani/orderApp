import { Body, Controller, Get, Post } from '@nestjs/common';
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
  create(@Body() orderDto: CreateOrderDto): Promise<Order> {
    return this.ordersService.createOrder(orderDto);
  }
}
