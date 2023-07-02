import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateOrderDto } from './dtos/createOrder.dto';
import { UpdateOrderDto } from './dtos/updateOrder.dto';
import { Order } from './order.schema';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  // @Get(':id')
  // getOne(@Param('id') id: string): Promise<Order> {
  //   return this.ordersService.findOne(id);
  // }

  // @Get()
  // getAll(): Promise<Order[]> {
  //   return this.ordersService.findAll();
  // }

  // @Post()
  // create(@Body() orderDto: CreateOrderDto): Promise<Order> {
  //   return this.ordersService.create(orderDto);
  // }

  // @Patch(':id')
  // pudate(
  //   @Body() orderDto: UpdateOrderDto,
  //   @Param('id') id: string,
  // ): Promise<Order> {
  //   return this.ordersService.update(id, orderDto);
  // }
}
