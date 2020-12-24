import { BadRequestException, Controller, Get } from '@nestjs/common';

import { EmailService, welcomeUser } from 'nestjs-email-service';

@Controller()
export class HomeController {
  constructor(private readonly emailService: EmailService) {}

  @Get('sendEmail')
  async sendEmail(): Promise<void> {
    const emailMetaData = {
      to: 'jam.com',
      from: 'vh.uk',
      subject: 'hi',
    };

    const template = welcomeUser({
      name: 'jam',
      email: 'jam@jam.com',
    });

    try {
      await this.emailService.sendMjml(emailMetaData, template);
    } catch (error) {
      throw new BadRequestException(error.response.body.errors[0]);
    }
  }

  @Get('viewEmail')
  async viewEmail(): Promise<string> {
    const template = welcomeUser({
      name: 'jam',
      email: 'jam@jam.com',
    });

    try {
      return await this.emailService.getRenderedMjml(template);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
