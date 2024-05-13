import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {
  PrismaModule,
  providePrismaClientExceptionFilter,
} from 'nestjs-prisma';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, PrismaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, providePrismaClientExceptionFilter()],
})
export class AppModule {}
