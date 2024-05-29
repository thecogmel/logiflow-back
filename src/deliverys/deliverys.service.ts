import { Injectable } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class DeliverysService {
  constructor(private prisma: PrismaService) {}

  async create(createDeliveryDto: CreateDeliveryDto) {
    const data = createDeliveryDto;
    return this.prisma.delivery.create({
      data,
    });
  }

  async findAll() {
    const deliverys = await this.prisma.delivery.findMany();
    return deliverys.map((delivery) => delivery);
  }

  async findOne(id: number) {
    return await this.prisma.delivery.findUniqueOrThrow({
      where: { id },
    });
  }

  async update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    const data = updateDeliveryDto;
    return await this.prisma.delivery.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.prisma.delivery.delete({
      where: { id },
    });
    return { message: 'Delivery deleted successfully.' };
  }
}
