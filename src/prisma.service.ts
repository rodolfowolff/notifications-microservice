import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // forca iniciar a conexao com prisma antes de tudo
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    // se a conexao com o banco cair, fecha conexao
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
