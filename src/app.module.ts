import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './app/booking/booking.module';
import { UserModule } from './app/user/user.module';
import { PrismaModule } from './common/prisma/prisma.module';

@Module({
  imports: [BookingModule, UserModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
