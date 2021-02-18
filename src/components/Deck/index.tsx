import React, { useEffect } from 'react';
import { useCards } from '../../hooks/card';
import Card from '../Card';

import { Container } from './styles';

interface DeckProps {
  onWin(): void;
}

const Deck: React.FC<DeckProps> = ({ onWin }) => {
  const { cards, flipCard } = useCards();

  useEffect(() => {
    if (cards.length) {
      const hasWon = cards.every(card => card.flipped);
      if (hasWon) {
        onWin();
      }
    }
  }, [cards, onWin]);

  return (
    <Container>
      {cards.map(card => (
        <Card key={card.id} {...card} onCardClicked={flipCard} />
      ))}
    </Container>
  );
};

export default Deck;
