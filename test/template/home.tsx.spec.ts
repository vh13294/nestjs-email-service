import { render } from 'mjml-react';
import { Template } from '../../lib';
import nodeHtmlToImage from 'node-html-to-image';

const name = 'Template.home';

describe(name, () => {
  const template = Template.home({
    name: 'name',
    address: 'address',
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
