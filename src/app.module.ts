import { Module } from '@nestjs/common';

import { Modules } from 'src/modules';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    ...Modules,
  ],
})
export class AppModule {}
