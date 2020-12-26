## Description

NestJS Email module that make use of react-mjml with

- Type safety template

- Integrate nicely nestjs

- @sendgrid/mail

## Example

- React Mjml

```tsx
interface Home {
  name: string;
  address: string;
}

export function welcomeUser(home: Home): React.ReactElement {
  return (
    <Mjml>
      <MjmlBody>
        <MjmlSection>
          <MjmlColumn>
            <MjmlImage
              width="100px"
              src="https://mjml.io/assets/img/logo-small.png"
            ></MjmlImage>
            <MjmlDivider border-color="#F45E43"></MjmlDivider>
            <MjmlText font-size="20px" color="#F45E43" font-family="helvetica">
              Hello World {home.name} {home.address}
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
}
```

- Controller

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

## Previewing Mjml

- service.getRenderedMjml(template: React.ReactElement)

- use npm node-html-to-image to output image

- Test specific file: npm test -- file

## Live Preview Development react-mjml

- npm run preview

## Error

If invalid API is used
The API will not return or generate response

## Cloudinary Free Image CDN

## TODO

- [ ] Test coverage
