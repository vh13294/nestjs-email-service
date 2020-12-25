## Description

NestJS Email module that make use of react-mjml with

- Type safety template
- Integrate nicely nestjs

## Install

npm i @sendgrid/mail

npm i react react-dom mjml mjml-react

npm i @types/react @types/react-dom --save-dev

## Example

```typescript
@Get('sendEmail')
async sendEmail(): Promise<void> {
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
        await this.emailService.sendMjml(emailMetaData, template);
    } catch (error) {
        throw new BadRequestException(error.response.body.errors[0]);
    }
}
```

## Previewing

service.getRenderedMjml(template: React.ReactElement)

## Testing Addresses

to: 'jam\_\_7',
from: 'vh_uk',

## Error

If invalid API is used
The API will not return or generate response

## Cloudinary Free Image CDN

## TODO

- [ ] Create test
- [ ] Renovate Automated dependency updates
- [ ] Automate CI, npm run build, push, npm publish
