import React, { useCallback, useEffect, useState } from 'react';
import Deck from '../../components/Deck';

import { Container } from './styles';

import cards from '../../shared/data';
import { duplicate, shuffle } from '../../shared/utils';
import { useCards } from '../../hooks/card';

type GameState = 'start' | 'play' | 'won';

const Game: React.FC = () => {
  const { initializeCards } = useCards();
  const [gameState, setGameState] = useState<GameState>('play');

  useEffect(() => {
    const duplicatedCards = duplicate(cards).map((card, i) => ({
      id: i + 1,
      ...card,
    }));
    const shuffledCards = shuffle(duplicatedCards);
    initializeCards(shuffledCards);
  }, [initializeCards]);

  const onWin = useCallback(() => {
    setGameState('won');
  }, []);

  return (
    <Container>
      {gameState === 'play' && <Deck onWin={onWin} />}
      {gameState === 'won' && <p style={{ color: '#fff' }}>You won!</p>}
    </Container>
  );
};

export default Game;
