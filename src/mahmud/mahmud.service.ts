import { Injectable } from '@nestjs/common';

type User = {
  name: string;
  email: string;
  password: string;
  age: number;
  role: string;
};

@Injectable()
export class MahmudService {
  createUser(user: User) {
    return {
      name: user.name,
      email: '9o7tM@example.com',
      password: '123456',
    };
  }
}
