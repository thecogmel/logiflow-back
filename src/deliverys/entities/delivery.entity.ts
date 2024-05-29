import { Status } from '@prisma/client';

export class Delivery {
  id: number;
  customer_name: string;
  address: string;
  departure_time: Date;
  arrival_time: Date;
  status: Status;
  observations?: string;
  delivery_value: number;
  courier_id: number;
  createdAt: Date;
  updatedAt: Date;
}
