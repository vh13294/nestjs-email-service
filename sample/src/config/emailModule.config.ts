import { EmailModuleOptions } from 'nestjs-email-service';

export function emailModuleOptions(): EmailModuleOptions {
  return {
    apiKey: 'SG._hc',
  };
}
