import React from 'react';

import { useGame } from '../../hooks/game';

import { Container, ScoreContainer } from './styles';

const Header: React.FC = () => {
  const { gameState, flips } = useGame();

  return (
    <Container>
      <div>
        <img src="/assets/logo.png" alt="logo" />
        <h1>
          <span>Jogo da</span>
          <span>Memória</span>
        </h1>
      </div>
      {gameState === 'play' && (
        <ScoreContainer>
          <span>Tentativas: {flips}</span>
        </ScoreContainer>
      )}
    </Container>
  );
};

export default Header;
