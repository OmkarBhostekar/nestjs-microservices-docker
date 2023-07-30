import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderRequest } from './dto/create-order.request';
import { FormDataRequest } from 'nestjs-form-data';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @FormDataRequest()
  async createOrder(@Body() request: CreateOrderRequest) {
    return this.ordersService.createOrder(request);
  }

  @Get()
  async getOrders() {
    return this.ordersService.getOrderse();
  }
}
