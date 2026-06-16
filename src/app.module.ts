import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { \[cats\]Module } from './[cats/]/[cats/].module';
import { MahmudService } from './mahmud/mahmud.service';
import { MahmudController } from './mahmud/mahmud.controller';
import { MahmudModule } from './mahmud/mahmud.module';
import { MahmudService } from './mahmud/mahmud.service';

@Module({
  imports: [AuthModule, CatsModule, \[cats\]Module, MahmudModule],
  controllers: [AppController, AuthController, MahmudController],
  providers: [AppService, CatsService, MahmudService],
})
export class AppModule {}
