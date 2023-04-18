import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { DB_ENV } from 'src/config';

@Injectable()
export class PrismaServiceProvider
  extends PrismaClient
  implements OnModuleInit
{
  constructor() {
    super({
      datasources: {
        db: {
          url: DB_ENV.url,
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
