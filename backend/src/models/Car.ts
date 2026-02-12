import mongoose, { Schema, Document } from 'mongoose';

export interface ICar extends Document {
  carModel: string;
  price: number;
  image: string;
  type: string;
  buildDate?: number; // Year
  createdAt?: Date;
}

const CarSchema: Schema = new Schema({
  carModel: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true, enum: ['SUV', 'Sedan', 'Sport', 'Truck', 'Coupe', 'Convertible', 'Hatchback', 'Van'] },
  buildDate: { type: Number },
}, { timestamps: true });

export default mongoose.model<ICar>('Car', CarSchema);
