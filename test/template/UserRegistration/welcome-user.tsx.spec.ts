import { render } from 'mjml-react';
import { Template } from '../../../lib';
import nodeHtmlToImage from 'node-html-to-image';

const name = Template.welcomeUser.name;

describe(name, () => {
  const template = Template.welcomeUser({
    name: 'name',
    email: 'address',
  });

  it('should return html', async () => {
    const { html } = render(template);
    await nodeHtmlToImage({
      output: `./test/rendered/${name}.png`,
      html: html,
    });
    expect(html).toContain('doctype');
  });
});
