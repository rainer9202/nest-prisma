import { Module } from '@nestjs/common';

import { Modules } from 'src/modules';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AuthModule, ...Modules],
})
export class AppModule {}
