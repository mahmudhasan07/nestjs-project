import { Injectable } from '@nestjs/common';
import ApiError from '../../common/error/ApiError';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async createUser(userData: CreateUserDto) {
    const findUser = await this.prisma.user.findUnique({
      where: {
        email: userData.email,
      },
    });

    if (findUser) {
      throw new ApiError(400, 'User with this email already exists');
    }
    const result = await this.prisma.user.create({
      data: { ...userData, role: 'USER' },
    });
    return result;
  }
}
