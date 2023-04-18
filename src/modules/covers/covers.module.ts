import { Module } from '@nestjs/common';

import { CoversService } from './covers.service';
import { CoversController } from './covers.controller';
import { CoversRepository } from './covers.repository';

@Module({
  controllers: [CoversController],
  providers: [CoversService, CoversRepository],
  exports: [CoversService],
})
export class CoversModule {}
