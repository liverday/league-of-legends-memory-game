import React, { useCallback } from 'react';

import Deck from '../../components/Deck';
import GameMenu from '../../components/GameMenu';
import Header from '../../components/Header';
import Win from '../../components/Win';

import { useGame } from '../../hooks/game';

import { Container, GameContainer } from './styles';

const Game: React.FC = () => {
  const { gameState, changeGameState } = useGame();

  const onWin = useCallback(() => {
    changeGameState('won');
  }, [changeGameState]);

  const onStart = useCallback(() => {
    changeGameState('play');
  }, [changeGameState]);

  return (
    <Container>
      <GameContainer>
        <Header />
        {gameState === 'start' && <GameMenu onStart={onStart} />}
        {gameState === 'play' && <Deck onWin={onWin} />}
        {gameState === 'won' && <Win />}
      </GameContainer>
    </Container>
  );
};

export default Game;
