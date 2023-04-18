import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { AuthGuard } from 'src/common/guard';

import { CoversService } from './covers.service';
import { coversTransform } from './transform/cover.transform';

import { CreateCoverDto } from './dto/create-cover.dto';
import { UpdateCoverDto } from './dto/update-cover.dto';
import { FilterCoverDto } from './dto/filter-cover.dto';

@Controller('covers')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('covers')
export class CoversController {
  private readonly model = 'cover';
  constructor(private readonly coversService: CoversService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() dto: CreateCoverDto) {
    return {
      status: HttpStatus.CREATED,
      message: `This action adds a new ${this.model}`,
      data: await this.coversService.create(dto),
    };
  }

  @Get()
  async findAll() {
    return {
      status: HttpStatus.OK,
      message: `This action returns all ${this.model}s`,
      data: coversTransform(await this.coversService.findAll()),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      status: HttpStatus.OK,
      message: `This action returns a #${id} ${this.model}`,
      data: coversTransform(await this.coversService.findOne(+id)),
    };
  }

  @Post('filter')
  async filter(@Body() dto: FilterCoverDto) {
    return {
      status: HttpStatus.OK,
      message: `This action returns filtered covers`,
      data: coversTransform(await this.coversService.filter(dto)),
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateCoverDto) {
    return {
      status: HttpStatus.OK,
      message: `This action updates a #${id} ${this.model}`,
      data: coversTransform(await this.coversService.update(+id, dto)),
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.coversService.remove(+id);
    return {
      status: HttpStatus.OK,
      message: `This action removes a #${id} ${this.model}`,
    };
  }
}
