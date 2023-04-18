import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { CONNECTION_STRING } from 'src/config/constants';

@Injectable()
export class PrismaServiceProvider
  extends PrismaClient
  implements OnModuleInit
{
  constructor() {
    super({
      datasources: {
        db: {
          url: CONNECTION_STRING,
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
