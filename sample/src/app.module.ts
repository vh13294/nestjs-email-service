import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { EmailModule } from 'nestjs-email-service';
import { RegisterModule } from './registerModule/register.module';

import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EmailModule.forRoot({
      apiKey: 'SG._hc',
      templateDir: join(process.env.PWD, 'src', 'emailTemplate', 'pages'),
      partialsDir: join(process.env.PWD, 'src', 'emailTemplate', 'partials'),
    }),
    RegisterModule,
  ],
  providers: [],
})
export class AppModule {}
