import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common';
import { OrdersRepository } from './orders.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { orderSchema } from './schemas/order.schema';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/orders/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'Order', schema: orderSchema }]),
    NestjsFormDataModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
})
export class OrdersModule {}
