import { Injectable } from '@nestjs/common';
import { prisma } from '../../common/prisma/prisma';

@Injectable()
export class UserService {
  async createUser(userData: any) {
    const result = await prisma.user.create({ data: userData });
    return result;
  }
}
