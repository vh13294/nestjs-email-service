import { BadRequestException, Controller, Get } from '@nestjs/common';

import { EmailService, Template } from 'nestjs-email-service';

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

    const template = Template.welcomeUser({
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
    // const template = Template.welcomeUser({
    //   name: 'jam',
    //   email: 'jam@jam.com',
    // });

    // const template = Template.home({
    //   name: 'name',
    //   address: 'address',
    // });

    // const template = Template.marketingOne();

    const template = Template.marketingTwo();

    try {
      return await this.emailService.getRenderedMjml(template);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
