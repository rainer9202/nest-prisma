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

import { AuthGuard } from 'src/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { usersTransform } from './transform/user.transform';

@Controller('users')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('users')
export class UsersController {
  private readonly model = 'user';
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return {
      status: HttpStatus.CREATED,
      message: `This action adds a new ${this.model}`,
      data: usersTransform(await this.usersService.create(createUserDto)),
    };
  }

  @Get()
  async findAll() {
    return {
      status: HttpStatus.OK,
      message: `This action returns all ${this.model}s`,
      data: usersTransform(await this.usersService.findAll()),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      status: HttpStatus.OK,
      message: `This action returns a #${id} ${this.model}`,
      data: usersTransform(await this.usersService.findOne(+id)),
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      status: HttpStatus.OK,
      message: `This action updates a #${id} ${this.model}`,
      data: usersTransform(await this.usersService.update(+id, updateUserDto)),
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.usersService.remove(+id);
    return {
      status: HttpStatus.OK,
      message: `This action removes a #${id} ${this.model}`,
    };
  }
}
