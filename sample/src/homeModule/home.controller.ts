import { BadRequestException, Controller, Get } from '@nestjs/common';

import { ClientResponse, EmailService, Template } from 'nestjs-email-service';

@Controller()
export class HomeController {
  constructor(private readonly emailService: EmailService) {}

  @Get('sendEmail')
  async sendEmail(): Promise<[ClientResponse, unknown]> {
    const emailMetaData = {
      to: 'jam_.com',
      from: 'vh_@my',
      subject: 'hi',
    };

    const template = Template.welcomeUser({
      name: 'jam',
      email: 'jam@jam.com',
    });

    try {
      return await this.emailService.sendMjml(emailMetaData, template);
    } catch (error) {
      throw new BadRequestException(error.response.body.errors[0]);
    }
  }

  @Get('viewEmail')
  async viewEmail(): Promise<string> {
    const template = Template.marketingTwo();

    try {
      return await this.emailService.getRenderedMjml(template);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
