import {
  IsDateString,
  IsEnum,
  IsISO8601,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { Delivery } from '../entities/delivery.entity';
import { Status } from '@prisma/client';

export class CreateDeliveryDto implements Delivery {
  id: number;

  @IsDateString()
  arrival_time: Date;

  @IsOptional()
  @IsEnum(Status)
  status: Status;

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

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  courier_id: number;

  createdAt: Date;
  updatedAt: Date;
}
