import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './app/booking/booking.module';
import { UserModule } from './app/user/user.module';

@Module({
  imports: [BookingModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
