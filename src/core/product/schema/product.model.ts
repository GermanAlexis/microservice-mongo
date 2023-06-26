import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
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

ProductSchema.set('toObject', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export default mongoose.model('product', ProductSchema);
