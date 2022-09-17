import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TopBreedDocument = TopBreed & Document;

@Schema()
export class TopBreed {
  @Prop()
  name: string;

  @Prop()
  total: number;

}

export const TopBreedSchema = SchemaFactory.createForClass(TopBreed);