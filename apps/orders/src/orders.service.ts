import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrderRepository } from './order.repository';
import { Order } from './order.schema';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OrdersService {
  private readonly logger = new Logger(OrdersService.name);
  constructor(
    private readonly orderRepository: OrderRepository,
    @Inject('billing') private billingClient: ClientProxy,
  ) {}

  async getOrders(): Promise<Order[]> {
    return this.orderRepository.find({});
  }

  async createOrder(
    order: CreateOrderDto,
    authentication: string,
  ): Promise<Order> {
    // const session = await this.orderRepository.startTransaction();
    try {
      // const newOrder = await this.orderRepository.create(order, { session });
      const newOrder = await this.orderRepository.create(order);
      await lastValueFrom(
        this.billingClient.emit('order_created', {
          order,
          Authentication: authentication,
        }),
      );
      // await session.commitTransaction();
      return newOrder;
    } catch (error) {
      // await session.abortTransaction();
      this.logger.error('error in creating order', error);
      throw error;
    }
  }
}
