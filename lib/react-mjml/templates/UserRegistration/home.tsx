import React from 'react';
import {
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlImage,
  MjmlDivider,
  MjmlText,
} from 'mjml-react';

interface Home {
  name: string;
  address: string;
}

export function home(home: Home): React.ReactElement {
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
