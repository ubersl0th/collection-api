import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Collectible } from '@prisma/client';

@Injectable()
export class CollectiblesService {
  constructor(private prisma: PrismaService) {}

  async findManyByCollection(id: string): Promise<Collectible[]> {
    return this.prisma.collectible.findMany({ where: { collectionId: id } });
  }

  async findManyByCollector(id: string): Promise<Collectible[]> {
    return this.prisma.collectible.findMany({ where: { collectorId: id } });
  }

  async findOneById(id: string): Promise<Collectible> {
    return this.prisma.collectible.findOne({ where: { id } });
  }
}
