import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Delivery } from '../entities/delivery.entity';

export class CreateDeliveryDto implements Delivery {
  id: number;

  @IsDateString()
  @IsNotEmpty()
  arrival_time: Date;

  @IsEnum(['PENDING', 'DELIVERED', 'CANCELED'])
  status: string;

  @IsOptional()
  observations?: string;

  @IsNotEmpty()
  @IsInt()
  delivery_value: number;

  @IsNotEmpty()
  customer_name: string;

  @IsNotEmpty()
  address: string;

  @IsDateString()
  @IsNotEmpty()
  departure_time: Date;

  createdAt: Date;
  updatedAt: Date;
}
