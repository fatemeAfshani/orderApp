import { v4 as uuid4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dtos/createOrder.dto';
import { UpdateOrderDto } from './dtos/updateOrder.dto';
import { OrderRepository } from './order.repository';
import { Order } from './order.schema';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrderRepository) {}

  // async findOne(id: string): Promise<Order> {
  //   return this.orderRepository.findOne({ id });
  // }

  // async findAll(): Promise<Order[]> {
  //   return this.orderRepository.find({});
  // }

  // async create(order: CreateOrderDto): Promise<Order> {
  //   return this.orderRepository.create({ id: uuid4(), ...order, products: [] });
  // }

  // async update(id: string, order: UpdateOrderDto): Promise<Order> {
  //   return this.orderRepository.update({ id }, { ...order, products: [] });
  // }
}
