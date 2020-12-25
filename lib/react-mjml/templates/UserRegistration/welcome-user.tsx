import React from 'react';
import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
} from 'mjml-react';

import { Card } from '../../components/card';

interface User {
  name: string;
  email: string;
}

export function welcomeUser(user: User): React.ReactElement {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>{user.name}</MjmlTitle>
        <MjmlPreview>{user.email}</MjmlPreview>
      </MjmlHead>
      <MjmlBody width={500}>
        <MjmlSection fullWidth backgroundColor="#efefef">
          <MjmlColumn>
            <MjmlImage src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            <MjmlButton
              padding="20px"
              backgroundColor="#346DB7"
              href="https://www.wix.com/"
            >
              This Yet Another Template
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>
        <Card title="test1" paragraph="yo"></Card>
        <MjmlSection fullWidth backgroundColor="#efefef">
          <MjmlColumn>
            <MjmlImage src="https://res.cloudinary.com/vh13294/image/upload/v1608871142/cat_m7qarm.jpg" />
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
}
