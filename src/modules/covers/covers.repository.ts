import { Injectable } from '@nestjs/common';
import { PrismaBaseRepository } from 'src/bases/repositories';

import { CoverEntity } from './entities/Cover';

@Injectable()
export class CoversRepository extends PrismaBaseRepository {
  constructor() {
    super('covers');
  }

  async create(cover: CoverEntity) {
    return await this.store({
      registerDate: cover.registerDate,
      historicalNumber: cover.historicalNumber,
      iteration: cover.iteration,
      invoiced: cover.invoiced,
      totalAmount: cover.totalAmount,
    });
  }

  async findAll(conditions: any = null) {
    return await this.fetch(conditions);
  }

  async findOne(field: string, value: any) {
    return await this.find(field, value);
  }

  async update(id: number, cover: CoverEntity) {
    return await this.modify(id, {
      registerDate: cover.registerDate,
      historicalNumber: cover.historicalNumber,
      iteration: cover.iteration,
      invoiced: cover.invoiced,
      totalAmount: cover.totalAmount,
    });
  }

  async remove(id: number) {
    return await this.delete(id);
  }
}
