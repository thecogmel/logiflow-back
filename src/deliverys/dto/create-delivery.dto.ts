import { Delivery } from '../entities/delivery.entity';

export class CreateDeliveryDto implements Delivery {
  id: number;
  arrival_time: Date;
  status: string;
  observations?: string;
  delivery_value: number;
  customer_name: string;
  bakery_name: string;
  departure_time: Date;
  createdAt: Date;
  updatedAt: Date;
}
