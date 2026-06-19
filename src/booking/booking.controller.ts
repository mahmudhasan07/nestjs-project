/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Controller, UseGuards } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller()
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @MessagePattern('createBooking')
  @UseGuards()
  create(@Payload() createBookingDto: CreateBookingDto): any {
    return this.bookingService.create(createBookingDto);
  }

  @MessagePattern('findAllBooking')
  findAll(): any {
    return this.bookingService.findAll();
  }

  @MessagePattern('findOneBooking')
  findOne(@Payload() id: number): any {
    return this.bookingService.findOne(id);
  }

  @MessagePattern('updateBooking')
  update(@Payload() updateBookingDto: UpdateBookingDto): any {
    return this.bookingService.update(updateBookingDto.id, updateBookingDto);
  }

  @MessagePattern('removeBooking')
  remove(@Payload() id: number): any {
    return this.bookingService.remove(id);
  }
}
