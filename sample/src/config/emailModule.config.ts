import { EmailModuleOptions } from 'nestjs-email-service';

export function emailModuleOptions(): EmailModuleOptions {
  return {
    apiKey: process.env.SENDGRID_API_KEY,
  };
}
