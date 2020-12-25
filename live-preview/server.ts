import { createServer, IncomingMessage, ServerResponse } from 'http';
import { render } from 'mjml-react';

import { Template } from '../lib';

function init(_req: IncomingMessage, res: ServerResponse) {
  res.writeHead(200, { 'Content-type': 'text/html' });

  // const template = Template.marketingOne();
  const template = Template.welcomeUser({
    name: 'name',
    email: 'email',
  });

  const { html } = render(template);

  res.end(html);
}

const server = createServer(init);

server.listen(3000, function () {
  console.log('Server is running at 3000');
});
