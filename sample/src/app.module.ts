import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { EmailModule } from 'nestjs-email-service';
import { RegisterModule } from './registerModule/register.module';
import { emailModuleOptions } from './config/emailModule.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EmailModule.forRoot(emailModuleOptions()),
    RegisterModule,
  ],
  providers: [],
})
export class AppModule {}
