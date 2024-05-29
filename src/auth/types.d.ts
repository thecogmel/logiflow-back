import { Role } from '@prisma/client';

interface User {
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

interface LoginRequest {
  user: User;
}

interface JwtPayload {
  sub: number;
  email: string;
  role: Role;
}
