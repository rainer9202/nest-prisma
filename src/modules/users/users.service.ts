import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { HashValue, MessageRepository } from 'src/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private repository: UsersRepository) {}

  async findOne(id: number) {
    const user = await this.repository.findOne('id', id);
    if (!user) throw new NotFoundException(MessageRepository.NOT_EXIST);
    return user;
  }

  async findOneByEmail(email: string) {
    const user = await this.repository.findOne('email', email);
    if (!user) throw new NotFoundException(MessageRepository.NOT_EXIST);
    return user;
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async create(dto: CreateUserDto) {
    const { name, email } = dto;
    const user = await this.repository.findOne('email', email);
    if (user) throw new BadRequestException(MessageRepository.EXIST);
    return await this.repository.create({
      name,
      email,
      password: await HashValue(dto.password),
    });
  }

  async update(id: number, dto: UpdateUserDto) {
    const { name, email } = dto;
    const userByEmail = await this.repository.findOne('email', dto.email);
    if (userByEmail && userByEmail.id !== id)
      throw new BadRequestException(MessageRepository.EXIST);

    const user = await this.repository.findOne('id', id);
    if (!user) throw new BadRequestException(MessageRepository.NOT_EXIST);

    return await this.repository.update(id, { name, email });
  }

  async remove(id: number) {
    const user = await this.repository.findOne('id', id);
    if (!user) throw new NotFoundException(MessageRepository.NOT_EXIST);
    return await this.repository.remove(id);
  }
}
