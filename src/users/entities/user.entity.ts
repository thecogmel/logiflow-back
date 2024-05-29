import { Role } from '@prisma/client';

export class User {
  id: number;
  email: string;
  name: string;
  role: Role;
  password: string;
  lat: number;
  long: number;
  createdAt: Date;
  updateAt: Date;
}
