export class Delivery {
  id: number;
  customer_name: string;
  address: string;
  departure_time: Date;
  arrival_time: Date;
  status: string;
  observations?: string;
  delivery_value: number;
  createdAt: Date;
  updatedAt: Date;
}
