import React from 'react';
import { Card as ICard } from '../../shared/interfaces';

import { Container, Front, Back } from './styles';

interface CardProps extends ICard {
  onCardClicked(card: ICard): void;
}

const Card: React.FC<CardProps> = ({ id, name, flipped, onCardClicked }) => {
  return (
    <Container
      flipped={flipped}
      onClick={() => onCardClicked({ id, name, flipped })}
    >
      <Front>
        <img src={`/assets/${name}.png`} alt={name} />
      </Front>
      <Back>?</Back>
    </Container>
  );
};

export default Card;
