import { Module } from '@nestjs/common';
import { EmailModule } from 'nestjs-email-service';
import { HomeModule } from './homeModule/home.module';
import { emailModuleOptions } from './config/emailModule.config';

@Module({
  imports: [EmailModule.forRoot(emailModuleOptions()), HomeModule],
  providers: [],
})
export class AppModule {}
