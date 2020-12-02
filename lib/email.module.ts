import {
  DynamicModule,
  Global,
  Module,
  Provider,
  ValueProvider,
} from '@nestjs/common';
import {
  EmailAsyncModuleOptions,
  EmailModuleOptions,
  EmailModuleOptionsFactory,
} from './email-options.interface';
import { EmailService } from './email.service';
import { EMAIL_MODULE_OPTIONS } from './email.constants';

@Global()
@Module({})
export class EmailModule {
  public static forRoot(options: EmailModuleOptions): DynamicModule {
    const urlGeneratorOptionsProvider: ValueProvider<EmailModuleOptions> = {
      provide: EMAIL_MODULE_OPTIONS,
      useValue: options,
    };

    return {
      module: EmailModule,
      providers: [urlGeneratorOptionsProvider, EmailService],
      exports: [EmailService],
    };
  }

  public static forRootAsync(options: EmailAsyncModuleOptions): DynamicModule {
    const providers: Provider[] = this.createAsyncProviders(options);

    return {
      module: EmailModule,
      providers: [...providers, EmailService],
      imports: options.imports,
      exports: [EmailService],
    };
  }

  private static createAsyncProviders(
    options: EmailAsyncModuleOptions,
  ): Provider[] {
    const providers: Provider[] = [this.createAsyncOptionsProvider(options)];

    if (options.useClass) {
      providers.push({
        provide: options.useClass,
        useClass: options.useClass,
      });
    }

    return providers;
  }

  private static createAsyncOptionsProvider(
    options: EmailAsyncModuleOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        name: EMAIL_MODULE_OPTIONS,
        provide: EMAIL_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    return {
      name: EMAIL_MODULE_OPTIONS,
      provide: EMAIL_MODULE_OPTIONS,
      useFactory: async (optionsFactory: EmailModuleOptionsFactory) => {
        return optionsFactory.createEmailOptions();
      },
      inject: [options.useExisting! || options.useClass!],
    };
  }
}
