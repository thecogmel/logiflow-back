import {
  IsDateString,
  IsEnum,
  IsISO8601,
  IsInt,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Delivery } from '../entities/delivery.entity';

export class CreateDeliveryDto implements Delivery {
  id: number;

  @IsDateString()
  arrival_time: Date;

  @IsOptional()
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

  @IsISO8601()
  @IsNotEmpty()
  departure_time: Date;

  createdAt: Date;
  updatedAt: Date;
}
