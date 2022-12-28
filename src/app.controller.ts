import { Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('getall')
  getNotification(): Promise<any> {
    return this.prisma.notification.findMany();
  }

  @Post('create')
  async create() {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'Voce tem uma nova mensagem!',
        title: 'Nova mensagem',
        category: 'Novidade',
        recipientId: randomUUID(),
      },
    });
  }
}
