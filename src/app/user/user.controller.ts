import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { type CreateUserDto, createUserSchema } from './dto/create-user.dto';
import { ZodValidationPipe } from '../../common/pipes/zodValidationPipe';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @MessagePattern('create-user')
  async create(
    @Payload(new ZodValidationPipe(createUserSchema))
    createUserDto: CreateUserDto,
  ) {
    const result = await this.userService.createUser(createUserDto);
    return result;
  }
}
