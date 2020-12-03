import { BadRequestException, Controller, Get } from '@nestjs/common';

import { EmailService } from 'nestjs-email-service';

@Controller()
export class RegisterController {
  constructor(private readonly emailService: EmailService) {}

  @Get('sendEmail')
  async target(): Promise<void> {

    const emailMetaData = {
      to: 'jam.com',
      from: 'vh.uk',
      subject: 'hi',
    }
    const templatePath = 'test.mjml'
    
    try {
      await this.emailService.sendMjml(emailMetaData, templatePath, { name: 'Bro' })
    } catch (error) {
      throw new BadRequestException(error.response.body.errors[0])
    }
  }

  @Get('viewEmail')
  async viewEmail(): Promise<string> {
    const emailMetaData = {
      to: 'a@target',
      from: 'a@sender',
      subject: 'hi',
    }
    const templatePath = 'test.mjml'
    
    try {
      return await this.emailService.getRenderedMjml(templatePath, { name: 'Bro' })
    } catch (error) {
      throw new BadRequestException(error)
    }
  }
}
