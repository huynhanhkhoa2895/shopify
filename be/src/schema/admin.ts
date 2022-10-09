import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = Admin & Document;

@Schema()
export class Admin {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    breed: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
