import { Role } from '@prisma/client';

interface User {
  id: number;
  email: string;
  name: string;
  role: Role;
  password: string;
  createdAt: Date;
  updateAt: Date;
}

interface LoginRequest {
  user: User;
}

interface JwtPayload {
  sub: number;
  email: string;
  role: Role;
}
