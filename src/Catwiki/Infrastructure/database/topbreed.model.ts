import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TopBreedDocument = TopBreed & Document;

@Schema()
export class TopBreed {
  @Prop()
  name: string;

  @Prop()
  total: number;

  @Prop({ default: '' })
  id_reference: string;

  @Prop({ default: '' })
  image_url: string;

  @Prop({ default: '' })
  description: string;
}

export const TopBreedSchema = SchemaFactory.createForClass(TopBreed);
