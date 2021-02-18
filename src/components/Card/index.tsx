import React from 'react';
import { Card as ICard } from '../../shared/interfaces';

import { Container, Front, Back } from './styles';

interface CardProps extends ICard {
  onCardClicked(card: ICard): void;
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  flipped,
  image,
  onCardClicked,
}) => {
  return (
    <Container
      flipped={flipped}
      onClick={() => onCardClicked({ id, name, flipped, image })}
    >
      <Front>
        <img src={image} alt={name} />
      </Front>
      <Back>?</Back>
    </Container>
  );
};

export default Card;
