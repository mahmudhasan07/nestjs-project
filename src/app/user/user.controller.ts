import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateBookingDto } from '../booking/dto/create-booking.dto';
import { createBookingSchema } from './dto/create-user.dto';
import { ZodValidationPipe } from '../../common/pipes/zodValidationPipe';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @MessagePattern('create-user')
  create(
    @Payload(new ZodValidationPipe(createBookingSchema))
    createBookingDto: CreateBookingDto,
  ) {
    // return this.userService.create(createBookingDto);
  }
}
