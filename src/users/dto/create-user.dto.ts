import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
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

  createdAt: Date;
  updateAt: Date;
}
