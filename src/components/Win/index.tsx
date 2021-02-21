import React, { useCallback } from 'react';
import { useGame } from '../../hooks/game';
import Button from '../Button';

import { Container } from './styles';

const Win: React.FC = () => {
  const { flips, changeGameState } = useGame();

  const handleRestartButton = useCallback(() => {
    changeGameState('start');
  }, [changeGameState]);

  return (
    <Container>
      <h2>Você venceu!</h2>
      <h3>Com um total de {flips} tentativas!</h3>
      <div>
        <h3>Obrigado por jogar!</h3>
      </div>
      <Button type="button" onClick={handleRestartButton}>
        Recomeçar
      </Button>
    </Container>
  );
};

export default Win;
