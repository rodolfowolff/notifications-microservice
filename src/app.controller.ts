import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create-notification';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('getall')
  getNotification(): Promise<any> {
    return this.prisma.notification.findMany();
  }

  @Post('create')
  async create(@Body() body: CreateNotificationBody) {
    const { content, title, category, recipientId } = body;
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        title,
        category,
        recipientId,
      },
    });
  }
}
