import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { EmailModule } from 'nestjs-email-service';
import path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EmailModule.forRoot({
      apiKey: '123',
      templateDir: path.join(__dirname, 'emailTemplate')
    }),
  ],
  providers: [],
})
export class AppModule {}
