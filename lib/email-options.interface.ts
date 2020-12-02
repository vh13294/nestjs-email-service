import { ModuleMetadata, Type } from '@nestjs/common';

export interface EmailModuleOptions {
  apiKey: string;
  // path.join(__dirname, 'email_templates')
  templateDir: string;
}

export interface EmailAsyncModuleOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useClass?: Type<EmailModuleOptionsFactory>;
  useExisting?: Type<EmailModuleOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<EmailModuleOptions> | EmailModuleOptions;
}

export interface EmailModuleOptionsFactory {
  createEmailOptions(): Promise<EmailModuleOptions> | EmailModuleOptions;
}
