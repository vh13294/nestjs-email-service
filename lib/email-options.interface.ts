import { ModuleMetadata, Type } from '@nestjs/common';

export interface EmailModuleOptions {
  // secret?: string;
  appKey: string;
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
