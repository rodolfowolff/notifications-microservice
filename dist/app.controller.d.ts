import { CreateNotificationBody } from './create-notification';
import { PrismaService } from './prisma.service';
export declare class AppController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getNotification(): Promise<any>;
    create(body: CreateNotificationBody): Promise<void>;
}
