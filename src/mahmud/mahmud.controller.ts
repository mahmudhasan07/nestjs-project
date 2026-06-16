import { Body, Controller, Post } from '@nestjs/common';
import { MahmudService } from './mahmud.service';

type User = {
  name: string;
  email: string;
  password: string;
  age: number;
  role: string;
};

@Controller('mahmud')
export class MahmudController {
  constructor(private readonly mahmudService: MahmudService) {}

  @Post('/create')
  createUser(@Body() user: User) {
    return this.mahmudService.createUser(user);
  }
}
