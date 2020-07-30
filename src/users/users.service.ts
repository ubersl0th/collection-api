import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, UserWhereInput } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOneById(id: string): Promise<User> {
    return this.prisma.user.findOne({ where: { id } });
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.prisma.user.findOne({ where: { email } });
  }

  async findOneByUsername(username: string): Promise<User> {
    return this.prisma.user.findOne({ where: { username } });
  }

  async findAll(where: UserWhereInput): Promise<User[]> {
    return this.prisma.user.findMany({ where });
  }
}
