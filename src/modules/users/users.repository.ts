import { Injectable } from '@nestjs/common';
import { PrismaBaseRepository } from 'src/bases';
import { UserEntity } from './entities/User';

@Injectable()
export class UsersRepository extends PrismaBaseRepository {
  constructor() {
    super('users');
  }

  async create(user: UserEntity) {
    return await this.store({
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }

  async findAll() {
    return await this.fetch();
  }

  async findOne(field: string, value: any) {
    return await this.find(field, value);
  }

  async update(id: number, user: UserEntity) {
    return await this.modify(id, {
      name: user.name,
      email: user.email,
    });
  }

  async remove(id: number) {
    return await this.delete(id);
  }
}
