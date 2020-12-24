import { Inject, Injectable } from '@nestjs/common';

import { EmailModuleOptions } from './interfaces/email-options.interface';
import { EMAIL_MODULE_OPTIONS } from './email.constants';

import { EmailData, EmailMetaData } from './interfaces/interfaces';

import { ClientResponse } from '@sendgrid/client/src/response';
import { send, setApiKey } from '@sendgrid/mail';
import { render } from 'mjml-react';

@Injectable()
export class EmailService {
  constructor(
    @Inject(EMAIL_MODULE_OPTIONS)
    private readonly emailModuleOptions: EmailModuleOptions,
  ) {
    if (!this.emailModuleOptions.apiKey) {
      throw new Error('The app key must not be empty');
    } else {
      setApiKey(emailModuleOptions.apiKey);
    }
  }

  public async sendTextOrHtml(
    emailData: EmailData,
  ): Promise<[ClientResponse, unknown]> {
    return send(emailData);
  }

  // [{ to: a.com, (html | text): 1 }, { to: b.com, (html | text: 2) }]
  public async sendMultiple(
    emailData: EmailData[],
  ): Promise<[ClientResponse, unknown]> {
    return send(emailData);
  }

  // for testing
  public async getRenderedMjml(template: React.ReactElement): Promise<string> {
    const { html } = render(template);
    return html;
  }

  public async sendMjml(
    metaData: EmailMetaData,
    template: React.ReactElement,
  ): Promise<[ClientResponse, unknown]> {
    const { html } = render(template);
    const emailData = {
      ...metaData,
      html: html,
    };
    return send(emailData);
  }
}
