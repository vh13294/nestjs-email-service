import { DynamicModule, Global, Module, ValueProvider } from '@nestjs/common';
import { EmailModuleOptions } from './interfaces/email-options.interface';
import { EmailService } from './email.service';
import { EMAIL_MODULE_OPTIONS } from './email.constants';

@Global()
@Module({})
export class EmailModule {
  public static forRoot(options: EmailModuleOptions): DynamicModule {
    const emailServiceOptionsProvider: ValueProvider<EmailModuleOptions> = {
      provide: EMAIL_MODULE_OPTIONS,
      useValue: options,
    };

    return {
      module: EmailModule,
      providers: [emailServiceOptionsProvider, EmailService],
      exports: [EmailService],
    };
  }
}
