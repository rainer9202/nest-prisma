import { PartialType } from '@nestjs/swagger';
import { CreateCoverDto } from './create-cover.dto';

export class UpdateCoverDto extends PartialType(CreateCoverDto) {}
