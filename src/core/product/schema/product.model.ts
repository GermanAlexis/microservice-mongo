import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { uuid } from 'uuid';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ default: uuid })
  productId: string;

  @Prop()
  title: string;

  @Prop()
  image: string;

  @Prop()
  like: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
