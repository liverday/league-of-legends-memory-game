import React, { useEffect, useCallback } from 'react';
import { useCards } from '../../hooks/card';
import { useGame } from '../../hooks/game';
import Card from '../Card';

import { Card as ICard } from '../../shared/interfaces';

import { EasyContainer, MediumContainer, HardContainer } from './styles';

interface DeckProps {
  onWin(): void;
}

const Containers = {
  easy: EasyContainer,
  medium: MediumContainer,
  hard: HardContainer,
};

const Deck: React.FC<DeckProps> = ({ onWin }) => {
  const { selectedCard, cards, flipCard } = useCards();
  const { level, addFlip } = useGame();

  useEffect(() => {
    if (cards.length) {
      const hasWon = cards.every(card => card.flipped);
      if (hasWon) {
        onWin();
      }
    }
  }, [selectedCard, cards, onWin]);

  const handleCardClicked = useCallback(
    (card: ICard) => {
      flipCard(card);
      if (selectedCard && selectedCard.id !== card.id) {
        addFlip();
      }
    },
    [selectedCard, flipCard, addFlip],
  );

  if (!level) {
    return null;
  }

  const Container = Containers[level.name];

  return (
    <Container>
      {cards.map(card => (
        <Card key={card.id} {...card} onCardClicked={handleCardClicked} />
      ))}
    </Container>
  );
};

export default Deck;
