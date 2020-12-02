import { BadRequestException } from '@nestjs/common';
import { compile } from 'handlebars';
import mjml2html from 'mjml';

// compile handlebars {{}} template (in mjml)
export function compileTemplate(rawHtml: string, data: unknown): string {
  const template = compile(rawHtml);
  const templateWithInjectedData = template(data);
  const mjml = mjml2html(templateWithInjectedData);
  if (mjml.errors) {
    throw new BadRequestException(mjml.errors.toString());
  }
  return mjml.html;
}
