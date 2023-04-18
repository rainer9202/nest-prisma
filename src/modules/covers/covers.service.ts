import { Injectable, NotFoundException } from '@nestjs/common';

import { MessageRepository } from 'src/common';

import { CreateCoverDto } from './dto/create-cover.dto';
import { UpdateCoverDto } from './dto/update-cover.dto';
import { CoversRepository } from './covers.repository';
import { FilterCoverDto } from './dto/filter-cover.dto';

@Injectable()
export class CoversService {
  constructor(private repository: CoversRepository) {}

  async findOne(id: number) {
    const cover = await this.repository.findOne('id', id);
    if (!cover) throw new NotFoundException(MessageRepository.NOT_EXIST);
    return cover;
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async create(dto: CreateCoverDto) {
    const { registerDate, historicalNumber, totalAmount, iteration, invoiced } =
      dto;
    return await this.repository.create({
      registerDate,
      historicalNumber,
      totalAmount,
      iteration,
      invoiced,
    });
  }

  async filter(dto: FilterCoverDto) {
    const { registerDateLte, registerDateGte, totalAmount, invoiced } = dto;
    return await this.repository.findAll({
      where: {
        AND: [
          {
            registerDate:
              registerDateLte != null && registerDateGte != null
                ? {
                    lte: new Date(registerDateLte),
                    gte: new Date(registerDateGte),
                  }
                : undefined,
          },
          { totalAmount: totalAmount },
          { invoiced: invoiced },
        ],
      },
    });
  }

  async update(id: number, dto: UpdateCoverDto) {
    const { registerDate, historicalNumber, totalAmount, iteration, invoiced } =
      dto;
    const cover = await this.repository.findOne('id', id);
    if (!cover) throw new NotFoundException(MessageRepository.NOT_EXIST);
    return await this.repository.update(id, {
      registerDate,
      historicalNumber,
      totalAmount,
      iteration,
      invoiced,
    });
  }

  async remove(id: number) {
    const cover = await this.repository.findOne('id', id);
    if (!cover) throw new NotFoundException(MessageRepository.NOT_EXIST);
    return await this.repository.remove(id);
  }
}
