import { PrismaService } from './prisma.service';
export declare class AppController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getNotification(): Promise<any>;
    create(): Promise<void>;
}
