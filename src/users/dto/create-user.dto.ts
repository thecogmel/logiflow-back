import {
  IsEmail,
  IsEnum,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { User } from '../entities/user.entity';
import { Role } from '@prisma/client';

export class CreateUserDto implements User {
  id: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(Role)
  @IsNotEmpty()
  role: Role;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsLatitude()
  lat: number;

  @IsOptional()
  @IsLongitude()
  long: number;

  createdAt: Date;
  updateAt: Date;
}
