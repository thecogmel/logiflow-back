import { Role } from '@prisma/client';

export class User {
  id: number;
  email: string;
  name: string;
  role: Role;
  password: string;
  createdAt: Date;
  updateAt: Date;
}
