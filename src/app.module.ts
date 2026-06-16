import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { MahmudModule } from './mahmud/mahmud.module';
import { MahmudController } from './mahmud/mahmud.controller';
import { BookingModule } from './booking/booking.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [AuthModule, MahmudModule, BookingModule, BookingsModule],
  controllers: [AppController, AuthController, MahmudController],
  providers: [AppService],
})
export class AppModule {}
