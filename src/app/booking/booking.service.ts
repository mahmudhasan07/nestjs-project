import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { prisma } from '../../common/prisma/prisma';

@Injectable()
export class BookingService {
  create(createBookingDto: CreateBookingDto) {
    return 'This action adds a new booking';
  }

  async findAll() {
  // const result = await prisma.
    // return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
