import { Module } from '@nestjs/common';
import { EmailModule } from 'nestjs-email-service';
import { RegisterModule } from './registerModule/register.module';
import { emailModuleOptions } from './config/emailModule.config';

@Module({
  imports: [EmailModule.forRoot(emailModuleOptions()), RegisterModule],
  providers: [],
})
export class AppModule {}
