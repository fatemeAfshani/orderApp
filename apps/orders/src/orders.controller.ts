import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { Order } from './order.schema';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // @Get(':id')
  // getOne(@Param('id') id: string): Promise<Order> {
  //   return this.ordersService.findOne(id);
  // }

  @Get()
  getOrders(): Promise<Order[]> {
    return this.ordersService.getOrders();
  }

  @Post()
  create(@Body() orderDto: CreateOrderDto): Promise<Order> {
    return this.ordersService.createOrder(orderDto);
  }

  // @Patch(':id')
  // pudate(
  //   @Body() orderDto: UpdateOrderDto,
  //   @Param('id') id: string,
  // ): Promise<Order> {
  //   return this.ordersService.update(id, orderDto);
  // }
}
