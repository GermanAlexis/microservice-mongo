import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  image: string;

  @Prop()
  like: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
