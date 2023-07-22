import { JwtAuthGuard } from '@app/common';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiCookieAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { CreateOrderDto } from './dtos/create-order.dto';
import { Order } from './order.schema';
import { OrdersService } from './orders.service';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'successful',
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  getOrders(): Promise<Order[]> {
    return this.ordersService.getOrders();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiCookieAuth()
  @ApiResponse({
    status: 201,
    description: 'created successfully',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  create(
    @Body() orderDto: CreateOrderDto,
    @Req() req: Request,
  ): Promise<Order> {
    return this.ordersService.createOrder(
      orderDto,
      req.cookies?.Authentication,
    );
  }
}
