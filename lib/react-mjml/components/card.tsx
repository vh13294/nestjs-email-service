import { FunctionComponent } from 'react';
import { MjmlSection, MjmlColumn, MjmlText } from 'mjml-react';

interface CardProps {
  title: string;
  paragraph?: string;
}

const cards: CardProps[] = [{ title: 'a' }, { title: 'b' }, { title: 'c' }];

const renderCards = () =>
  cards.map((card, index) => {
    return (
      <MjmlText key={index}>{`${card.title} with ${card.paragraph}`}</MjmlText>
    );
  });

export const Card: FunctionComponent<CardProps> = ({
  title,
  paragraph = 'Hello World',
}) => (
  <MjmlSection>
    <MjmlColumn>
      <MjmlText>{title}</MjmlText>
      <MjmlText>{paragraph}</MjmlText>
      {renderCards()}
    </MjmlColumn>
  </MjmlSection>
);
