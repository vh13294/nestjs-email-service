import { Inject, Injectable } from '@nestjs/common';

import { EmailModuleOptions } from './email-options.interface';
import { EMAIL_MODULE_OPTIONS } from './email.constants';

import { compileTemplate } from './helpers';
import { EmailMetaData } from './interfaces';

import { ClientResponse } from '@sendgrid/client/src/response';
import { MailDataRequired, send, setApiKey } from '@sendgrid/mail';

@Injectable()
export class EmailService {
  constructor(
    @Inject(EMAIL_MODULE_OPTIONS)
    private readonly emailModuleOptions: EmailModuleOptions,
  ) {
    if (!this.emailModuleOptions.apiKey) {
      throw new Error('The app url must not be empty');
    } else {
      setApiKey(emailModuleOptions.apiKey);
    }
  }

  public async sendText(
    metaData: EmailMetaData,
    text: string,
  ): Promise<[ClientResponse, {}]> {
    const emailData = {
      ...metaData,
      text: text,
    };
    return send(emailData);
  }

  public async sendHtml(
    metaData: EmailMetaData,
    html: string,
    templateData: unknown,
  ): Promise<[ClientResponse, {}]> {
    const compiledHtml = compileTemplate(html, templateData);
    const emailData = {
      ...metaData,
      html: compiledHtml,
    };
    return send(emailData);
  }

  // todo add another method
  // [{to: a.com, html: directory, dataToRender: {}}, {to: b.com, html: directory, dataToRender: {}}]

  // [{to: a.com, html | text: 1}, {to: b.com, html | text: 2}]
  public async sendTextMultiple(
    emailData: MailDataRequired[],
  ): Promise<[ClientResponse, {}]> {
    return send(emailData);
  }
}
