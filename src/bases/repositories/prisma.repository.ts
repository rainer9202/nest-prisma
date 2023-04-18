import { PrismaServiceProvider } from 'src/providers/database';

import { BaseRepository } from '../abstract/BaseRepository';

export class PrismaBaseRepository extends BaseRepository {
  private prisma: PrismaServiceProvider;

  constructor(protected model: string) {
    super();
    this.prisma = new PrismaServiceProvider();
  }

  protected async store(data: any) {
    try {
      return await this.prisma[this.model].create({ data });
    } catch (error) {
      console.log(error);
    }
  }

  protected async fetch(conditions: any = null) {
    try {
      return await this.prisma[this.model].findMany(conditions);
    } catch (error) {
      console.log(error);
    }
  }

  protected async find(field: string, value: any) {
    try {
      const user = await this.prisma[this.model].findUnique({
        where: { [field]: value },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  protected async modify(id: number, data: any) {
    try {
      return await this.prisma[this.model].update({ where: { id }, data });
    } catch (error) {
      console.log(error);
    }
  }

  protected async delete(id: number) {
    try {
      return await this.prisma[this.model].delete({ where: { id } });
    } catch (error) {
      console.log(error);
    }
  }
}
