import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Collection } from '@prisma/client';

@Injectable()
export class CollectionsService {
  constructor(private prisma: PrismaService) {}

  async findManyByCollector(id: string): Promise<Collection[]> {
    return this.prisma.collection.findMany({ where: { collectorId: id } });
  }

  async findOneById(id: string): Promise<Collection> {
    return this.prisma.collection.findOne({ where: { id } });
  }
}
