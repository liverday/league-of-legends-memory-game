import React, { useState, useCallback, useContext, createContext } from 'react';

import { duplicate, shuffle, getCardsByLevel } from '../shared/utils';
import { Card, Level } from '../shared/interfaces';

interface CardContextData {
  cards: Card[];
  selectedCard: Card | null;
  flipCard(card: Card): void;
  initializeCards(level: Level): void;
}

const CardContext = createContext({} as CardContextData);

export const CardContextProvider: React.FC = ({ children }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [isMatching, setIsMatching] = useState(false);

  const match = useCallback(
    (first: Card, second: Card) => {
      setIsMatching(true);
      if (first.name !== second.name) {
        const newCards = [...cards];
        const firstCardIndex = newCards.findIndex(card => card.id === first.id);
        const secondCardIndex = newCards.findIndex(
          card => card.id === second.id,
        );

        if (firstCardIndex >= 0) {
          newCards[firstCardIndex] = {
            ...newCards[firstCardIndex],
            flipped: false,
          };
        }

        if (secondCardIndex >= 0) {
          newCards[secondCardIndex] = {
            ...newCards[secondCardIndex],
            flipped: false,
          };
        }

        setTimeout(() => {
          setCards(newCards);
          setIsMatching(false);
        }, 1000);
      } else {
        setIsMatching(false);
      }

      setSelectedCard(null);
    },
    [cards],
  );

  const flipCard = useCallback(
    (card: Card) => {
      if (isMatching) return;

      if (card.flipped) return;

      const newCards = [...cards];
      const cardIndex = newCards.findIndex(oldCard => oldCard.id === card.id);

      if (cardIndex >= 0) {
        newCards[cardIndex] = {
          ...newCards[cardIndex],
          flipped: true,
        };

        setCards(newCards);
      }

      if (selectedCard) {
        match(selectedCard, card);
      } else {
        setSelectedCard(card);
      }
    },
    [selectedCard, cards, match, isMatching],
  );

  const initializeCards = useCallback((level: Level) => {
    const levelCards = getCardsByLevel(level);
    const duplicatedCards = duplicate(levelCards);
    const shuffleDuplicatedCards = shuffle(duplicatedCards);
    const newCards = shuffleDuplicatedCards.map((card, index) => ({
      id: index + 1,
      ...card,
    }));
    setCards(newCards);
  }, []);

  return (
    <CardContext.Provider
      value={{ cards, initializeCards, flipCard, selectedCard }}
    >
      {children}
    </CardContext.Provider>
  );
};

export function useCards(): CardContextData {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('should be used with CardContextProvider');
  }

  return context;
}
