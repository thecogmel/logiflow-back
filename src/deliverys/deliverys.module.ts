import { Module } from '@nestjs/common';
import { DeliverysService } from './deliverys.service';
import { DeliverysController } from './deliverys.controller';
import { PrismaService } from 'nestjs-prisma';

@Module({
  controllers: [DeliverysController],
  providers: [PrismaService, DeliverysService],
})
export class DeliverysModule {}
