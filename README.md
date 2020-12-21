## Description

NestJS module that integrate with

npm i @sendgrid/mail

npm i handlebars

npm i mjml

npm i @types/mjml

## Handlebars setup

Handlebars partials == components
Register partials with .mjml
add VS-Code MJML
add VS-Code handlebars ??

## Assets not in /dist

When importing this lib /src/emailTemplate will not be in /dist
=> Need the whole repository on production (to include the templates)

<!-- using process.env.PWD -->

join(process.env.PWD, 'src', 'email_templates')

## Previewing

service.getRenderedMjml(path, data)

## Testing Addresses

to: 'jam\_\_7',
from: 'vh_uk',

## Error

If invalid API is used
The API will not return or generate response

## Serve Static Files & Images

// Good for prototyping & testing

```typescript
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

const app = await NestFactory.create<NestExpressApplication>(AppModule);
app.useStaticAssets(
  join(process.env.PWD, 'src', 'emailTemplate', 'serveStatic'),
);
// file will be available at root URL: http://localhost:3000/image.png
```

## Cloudinary Free Image CDN

## TODO

- [ ] Create test
- [ ] Renovate Automated dependency updates
- [ ] Automate CI, npm run build, push, npm publish
