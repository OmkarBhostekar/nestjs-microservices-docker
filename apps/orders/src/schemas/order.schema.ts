import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Order extends AbstractDocument {
  @Prop()
  name: String;

  @Prop()
  price: Number;

  @Prop()
  phoneNumber: String;
}

export const orderSchema = SchemaFactory.createForClass(Order);
